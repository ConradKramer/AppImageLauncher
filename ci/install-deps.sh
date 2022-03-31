#! /bin/bash

set -e

if [[ "$ARCH" == "" ]]; then
    echo "Usage: env ARCH=... bash $0"
    exit 2
fi

if [[ "$CI" == "" ]]; then
    echo "Caution: this script is supposed to run inside a (disposable) CI environment"
    echo "It will alter a system, and should not be run on workstations or alike"
    echo "You can export CI=1 to prevent this error from being shown again"
    exit 3
fi

case "$ARCH" in
    x86_64|i386|armhf|arm64)
        ;;
    *)
        echo "Error: unsupported architecture: $ARCH"
        exit 4
        ;;
esac

case "$DIST" in
    xenial|bionic)
        ;;
    *)
        echo "Error: unsupported distribution: $DIST"
        exit 5
        ;;
esac

set -x

packages=(
    libcurl4-openssl-dev
    libfuse-dev
    desktop-file-utils
    libglib2.0-dev
    libcairo2-dev
    libssl-dev
    ca-certificates
    libbsd-dev
    qttools5-dev-tools
    gcc
    g++
    make
    build-essential
    git
    automake
    autoconf
    libtool
    patch
    wget
    vim-common
    desktop-file-utils
    pkg-config
    libarchive-dev
    libboost-filesystem-dev
    librsvg2-dev
    librsvg2-bin
    libssl1.0.0
    rpm
    rpm2cpio
    liblzma-dev
)

if [[ "$BUILD_LITE" == "" ]]; then
    packages+=(
        qtbase5-dev
        qt5-qmake
    )
else
    apt-get update
    apt-get -y --no-install-recommends install software-properties-common
    add-apt-repository -y ppa:beineri/opt-qt-5.14.2-"$DIST"
    packages+=(
        qt514-meta-minimal
    )
fi

# install 32-bit build dependencies and multilib/cross compilers for binfmt-bypass's 32-bit preload library
if [[ "$ARCH" == "x86_64" ]]; then
    dpkg --add-architecture i386
    packages+=(
        libc6-dev:i386
        gcc-multilib
        g++-multilib
    )
elif [[ "$ARCH" == "arm64"* ]]; then
    # cross-compiling for armhf is only really easy with clang, where we can specify the target as a compiler option
    # clang -target arm-linux-gnueabihf ...
    dpkg --add-architecture armhf
    packages+=(
        libc6-dev:armhf
        clang
    )
fi

apt-get update
apt-get -y --no-install-recommends install "${packages[@]}"

# install more recent CMake version which fixes some linking issue in CMake < 3.10
# Fixes https://github.com/TheAssassin/AppImageLauncher/issues/106
# Upstream bug: https://gitlab.kitware.com/cmake/cmake/issues/17389
CMAKE_ARCH="$ARCH"
if [[ "$CMAKE_ARCH" == "arm64"* ]]; then
    CMAKE_ARCH=arm64v8
fi
wget https://artifacts.assassinate-you.net/prebuilt-cmake/continuous/cmake-v3.19.1-ubuntu_xenial-"$CMAKE_ARCH".tar.gz -qO- | \
    tar xz -C/usr/local --strip-components=1

if [[ "$BUILD_LITE" != "" ]]; then
    # https://github.com/TheAssassin/AppImageLauncher/issues/199
    apt-get update
    apt-get -y install libgtk2.0-dev libgl1-mesa-dev
    source /opt/qt*/bin/qt*env.sh || true
    git clone http://code.qt.io/qt/qtstyleplugins.git
    cd qtstyleplugins
    qmake
    make -j"$(nproc)"
    make install
fi
