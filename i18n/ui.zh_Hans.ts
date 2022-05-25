<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_Hans">
<context>
    <name>FirstRunDialog</name>
    <message>
        <location filename="../src/ui/first-run.ui" line="+20"/>
        <source>First run</source>
        <translation>首次运行</translation>
    </message>
    <message>
        <location line="+55"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-size:11pt; font-weight:600;&quot;&gt;Welcome to AppImageLauncher!&lt;/span&gt;&lt;/p&gt;&lt;p&gt;This little helper is designed to improve your AppImage experience on your computer.&lt;/p&gt;&lt;p&gt;It appears you have never run AppImageLauncher before. Please take a minute and configure your preferences. You can always change these later on, using the control panel.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-size:11pt; font-weight:600;&quot;&gt;欢迎使用 AppImageLauncher！&lt;/span&gt;&lt;/p&gt;&lt;p&gt;这个小助手旨在改善您使用 AppImage 的体验。&lt;/p&gt;&lt;p&gt;看来您以前从未运行过 AppImageLauncher 。请花一点时间配置appimage launcher。您随后可以使用控制面板更改这些内容。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Ask me whether to move new AppImages into a central location</source>
        <translation>询问我是否要将新的 AppImage 移动到一个中心位置</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Integration target destination directory:</source>
        <translation>存放已集成的目标目录：</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Customize</source>
        <translation>自定义</translation>
    </message>
    <message>
        <location filename="../src/ui/first-run.cpp" line="+86"/>
        <source>Choose integration destination dir</source>
        <translation>选择集成后appimage的存放目录</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>(default)</source>
        <translation>（默认）</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <location filename="../src/ui/main.cpp" line="+380"/>
        <source>Warning</source>
        <translation>警告</translation>
    </message>
    <message>
        <source>AppImage has already been integrated, but it is not in the current integration destination directory.

Do you want to move it into the new destination?
Choosing No will run the AppImage once, and leave the AppImage in its current directory.</source>
        <translation type="vanished">AppImage 已集成，但它不在当前集成目标文件夹。

你想要将它移至新位置吗？
选择否将运行一次 AppImage ，并将 AppImage 留在当前文件夹。</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AppImage %1 has already been integrated, but it is not in the current integration destination directory.

Do you want to move it into the new destination?

Choosing No will run the AppImage once, and leave the AppImage in its current directory.

</source>
        <translation>AppImage %1 已集成，但它不在当前已集成的文件夹内。

你想要将它移至新位置吗？
选择否将运行一次 AppImage ，并将 AppImage 留在当前文件夹。

</translation>
    </message>
    <message>
        <location filename="../src/shared/shared.cpp" line="+1232"/>
        <location line="+8"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="../src/ui/main.cpp" line="+23"/>
        <source>Failed to unregister AppImage before re-integrating it</source>
        <translation>未能在重新集成 AppImage 前解除集成</translation>
    </message>
    <message>
        <location filename="../src/shared/shared.cpp" line="-485"/>
        <source>Could not parse desktop file translations:
Could not open file for reading:

%1</source>
        <translation>无法解析桌面文件翻译：
无法读取此文件：

%1</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Could not parse desktop file translations:
Invalid syntax:

%1</source>
        <translation>无法解析桌面文件翻译：
无效语法：

%1</translation>
    </message>
    <message>
        <location line="+409"/>
        <source>File %1 is owned by another user: %2</source>
        <translation>文件 %1 的所有者是：%2</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Permissions problem</source>
        <translation>权限问题</translation>
    </message>
    <message>
        <location line="+52"/>
        <source>Failed to run permissions helper, exited with return code %1</source>
        <translation>运行权限助手失败，退出代码 %1</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Could not find suitable permissions helper, aborting</source>
        <translation>未找到合适的权限助手，正在退出</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location line="-985"/>
        <location line="+680"/>
        <location filename="../src/ui/remove_main.cpp" line="+106"/>
        <location line="+12"/>
        <location line="+12"/>
        <location filename="../src/ui/update_main.cpp" line="+119"/>
        <location line="+42"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="../src/ui/main.cpp" line="-358"/>
        <source>AppImageLauncher does not support type %1 AppImages at the moment.</source>
        <translation>AppImageLauncher 目前不支持 %1 类型的 AppImage 。</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Could not make AppImage executable: %1</source>
        <translation>无法设置 AppImage 为可执行： %1</translation>
    </message>
    <message>
        <source>Failed to open AppImage for reading: %1</source>
        <translation type="vanished">未能打开 AppImage 以读取： %1</translation>
    </message>
    <message>
        <source>Failed to create temporary directory</source>
        <translation type="vanished">未能创建临时文件夹</translation>
    </message>
    <message>
        <source>Failed to create temporary copy of type 1 AppImage</source>
        <translation type="vanished">未能创建 %1 类型 AppImage 的临时副本</translation>
    </message>
    <message>
        <source>Failed to open temporary AppImage copy for writing</source>
        <translation type="vanished">未能打开临时 AppImage 副本以写入</translation>
    </message>
    <message>
        <source>Failed to remove magic bytes from temporary AppImage copy</source>
        <translation type="vanished">未能从临时AppImage 副本中移除 magic bytes</translation>
    </message>
    <message>
        <source>execv() failed: %1</source>
        <comment>error message</comment>
        <translation type="vanished">execv() 失败： %1</translation>
    </message>
    <message>
        <source>runtime not found: no such file or directory: %1</source>
        <translation type="vanished">未找到运行时：无此文件或文件夹： %1</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>execv() failed: %1</source>
        <translation>execv() 失败： %1</translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Usage: %1 [options] &lt;path&gt;</source>
        <translation>用法： %1 [选项] &lt;路径&gt;</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Desktop integration helper for AppImages, for use by Linux distributions.</source>
        <translation>AppImage 桌面集成助手，供 Linux 发行版使用。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Options:</source>
        <translation>选项：</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display this help and exit</source>
        <translation>显示此帮助并退出</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display version and exit</source>
        <translation>显示版本并退出</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Arguments:</source>
        <translation>参数：</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Path to AppImage (mandatory)</source>
        <translation>AppImage 路径（强制）</translation>
    </message>
    <message>
        <location line="-21"/>
        <source>Failed to clean up old desktop files</source>
        <translation>清除旧桌面文件失败</translation>
    </message>
    <message>
        <source>Failed to register AppImage in AppImageLauncherFS: error while trying to start appimagelauncherfs.service</source>
        <translation type="vanished">在 AppImageLauncherFS 中注册 AppImage 失败：启动 appimagelauncherfs.service 时出错</translation>
    </message>
    <message>
        <source>Failed to register AppImage in AppImageLauncherFS: failed to register AppImage path %1</source>
        <translation type="vanished">在 AppImageLauncherFSFailed 中注册 AppImage 失败：注册 AppImage 路径 %1 失败</translation>
    </message>
    <message>
        <source>Failed to register AppImage in AppImageLauncherFS: could not open map file</source>
        <translation type="vanished">在 AppImageLauncherFSFailed 中注册 AppImage 失败：无法打开映射文件</translation>
    </message>
    <message>
        <source>Failed to register AppImage in AppImageLauncherFS: could not find virtual file for AppImage</source>
        <translation type="vanished">在 AppImageLauncherFSFailed 中注册 AppImage 失败：无法找到 AppImage 虚拟文件</translation>
    </message>
    <message>
        <source>Failed to register AppImage in AppImageLauncherFS: unknown failure</source>
        <translation type="vanished">在 AppImageLauncherFSFailed 中注册 AppImage 失败：未知失败</translation>
    </message>
    <message>
        <location line="+8"/>
        <location filename="../src/ui/remove_main.cpp" line="+1"/>
        <source>Failed to clean up AppImage trash bin: %1</source>
        <translation>清空 AppImage 垃圾箱失败： %1</translation>
    </message>
    <message>
        <location line="+48"/>
        <source>Unknown AppImageLauncher option: %1</source>
        <translation>未知 AppImageLauncher 选项： %1</translation>
    </message>
    <message>
        <location line="+12"/>
        <location filename="../src/ui/remove_main.cpp" line="-74"/>
        <location filename="../src/ui/update_main.cpp" line="-99"/>
        <source>Error: no such file or directory: %1</source>
        <translation>错误：无此文件或文件夹： %1</translation>
    </message>
    <message>
        <location line="+13"/>
        <location filename="../src/ui/update_main.cpp" line="+7"/>
        <source>Not an AppImage: %1</source>
        <translation>不是 AppImage： %1</translation>
    </message>
    <message>
        <location line="+159"/>
        <source>The directory the integrated AppImages are stored in is currently set to:
%1</source>
        <translation>存储集成的 AppImage 的文件夹现在被设为：
%1</translation>
    </message>
    <message>
        <source>The directory the integrated AppImages are stored in is currently set to: %1</source>
        <translation type="vanished">存储集成的 AppImage 的文件夹现在被设为： %1</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Integrating it will move the AppImage into a predefined location, and include it in your application launcher.</source>
        <translation>集成它将会将 AppImage 移动到预设位置，并将它包含进你的应用启动器。</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>To remove or update the AppImage, please use the context menu of the application icon in your task bar or launcher.</source>
        <translation>请使用任务栏或启动器中应用图标的上下文菜单移除或更新 AppImage 。</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>The directory the integrated AppImages are stored in is currently set to:</source>
        <translation>存储集成的 AppImage 的文件夹现在被设为：</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>%1 has not been integrated into your system.</source>
        <translation>%1 尚未集成到你的系统。</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Desktop Integration</source>
        <translation>桌面集成</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Integrate and run</source>
        <translation>集成并运行</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run once</source>
        <translation>运行一次</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <source>Removes AppImages after desktop integration, for use by Linux distributions</source>
        <translation type="vanished">桌面集成后移除 AppImage ，供 Linux 发行版使用</translation>
    </message>
    <message>
        <source>AppImageLauncher remove</source>
        <comment>remove helper app name</comment>
        <translation type="vanished">AppImageLauncher 移除</translation>
    </message>
    <message>
        <location filename="../src/ui/remove_main.cpp" line="-28"/>
        <source>Helper to delete integrated AppImages easily, e.g., from the application launcher&apos;s context menu</source>
        <translation>用于轻松删除集成的 AppImage 的助手，例如，从应用启动器上下文菜单中删除</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Path to AppImage</source>
        <translation>AppImage 路径</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>&lt;path&gt;</source>
        <translation>&lt;路径&gt;</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>AppImage delete helper error</source>
        <translation>AppImage 删除助手错误</translation>
    </message>
    <message>
        <source>AppImage remove helper error</source>
        <translation type="vanished">AppImage 移除助手错误</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Not an AppImage:

%1</source>
        <translation>不是 AppImage:

%1</translation>
    </message>
    <message>
        <source>Refusing to work on non-integrated AppImage:

%1</source>
        <translation type="vanished">拒绝在未集成 AppImage 上工作:

%1</translation>
    </message>
    <message>
        <source>Please confirm</source>
        <translation type="vanished">请确认</translation>
    </message>
    <message>
        <source>Are you sure you want to remove this AppImage?</source>
        <translation type="vanished">你确定要移除此 AppImage 吗？</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Failed to unregister AppImage: %1</source>
        <translation>未能注销 AppImage： %1</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to move AppImage into trash bin directory</source>
        <translation>将 AppImage 移入垃圾箱文件夹失败</translation>
    </message>
    <message>
        <source>Failed to remove AppImage: %1</source>
        <translation type="vanished">移除 AppImage 失败： %1</translation>
    </message>
    <message>
        <location filename="../src/shared/shared.cpp" line="-27"/>
        <source>AppImage with same filename has already been integrated.</source>
        <translation>具有相同文件名的 AppImage 已集成。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Do you wish to overwrite the existing AppImage?</source>
        <translation>你想要覆盖已存在的 AppImage 吗？</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Choosing No will run the AppImage once, and leave the system in its current state.</source>
        <translation>选择否将运行一次 AppImage ，并保留当前系统状态。</translation>
    </message>
    <message>
        <location line="-652"/>
        <location line="+656"/>
        <source>Warning</source>
        <translation>警告</translation>
    </message>
    <message>
        <source>Failed to move AppImage to target location</source>
        <translation type="vanished">未能将 AppImage 移动到目标位置</translation>
    </message>
    <message>
        <location line="-296"/>
        <source>Failed to register AppImage in system via libappimage</source>
        <translation>未能通过 libappimage 在系统中注册 AppImage</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed to find integrated desktop file</source>
        <translation>未找到已集成桌面文件</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Couldn&apos;t find integrated AppImage&apos;s desktop file</source>
        <translation>无法找到已集成 AppImage 的桌面文件</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Failed to load desktop file:</source>
        <translation>加载桌面文件失败：</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>AppImage has invalid desktop file</source>
        <translation>AppImage 有无效桌面文件</translation>
    </message>
    <message>
        <location line="+271"/>
        <source>Failed to move AppImage to target location.
Try to copy AppImage instead?</source>
        <translation>未能移动 AppImage 到目标位置。
改为尝试复制 AppImage 吗？</translation>
    </message>
    <message>
        <location line="+181"/>
        <source>Failed to call stat() on path:

%1</source>
        <translation>在此路径上调用 stat() 失败:

%1</translation>
    </message>
    <message>
        <source>Failed to copy AppImage to target location</source>
        <translation type="vanished">未能复制 AppImage 到目标位置</translation>
    </message>
    <message>
        <location filename="../src/ui/update_main.cpp" line="-40"/>
        <source>Updates AppImages after desktop integration, for use by Linux distributions</source>
        <translation>桌面集成后更新 AppImage ，供 Linux 发行版使用</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>AppImageLauncher update</source>
        <comment>update helper app name</comment>
        <translation>AppImageLauncher 更新</translation>
    </message>
    <message>
        <source>The AppImage hasn&apos;t been integrated before. This tool will, however, integrate the updated AppImage.</source>
        <translation type="vanished">AppImage 此前未集成。然而此工具将集成更新后的 AppImage 。</translation>
    </message>
    <message>
        <source>Do you wish to continue?</source>
        <translation type="vanished">你想继续吗？</translation>
    </message>
    <message>
        <location line="+67"/>
        <source>No updates found</source>
        <translation>未找到更新</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Could not find updates for AppImage %1</source>
        <translation>无法找到 AppImage %1 的更新</translation>
    </message>
    <message>
        <source>Failed to check for updates. Please check the command line output for details.</source>
        <translation type="vanished">检查更新失败。请检查命令行输出获取详细信息。</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>No update information found</source>
        <translation>未找到更新信息</translation>
    </message>
    <message>
        <source>Could not find update information in AppImage:
%1

The AppImage doesn&apos;t support updating. Please ask the authors to set update information to allow for easy updating.</source>
        <translation type="vanished">AppImage 中未找到更新信息：
%1

此 AppImage 不支持更新。请要求作者创建更新信息以便轻松更新。</translation>
    </message>
    <message>
        <source>Could not find update information in AppImage:
%1

The AppImage doesn&apos;t support updating. Please ask the authors to set upupdate information to allow for easy updating.</source>
        <translation type="vanished">无法在 AppImage 中找到更新信息：
%1

此 AppImage 不支持更新。请向作者请求设置更新信息以允许轻松更新。</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Could not find update information in AppImage:
%1

The AppImage doesn&apos;t support updating. Please ask the authors to embed update information to allow for easy updating.</source>
        <translation>无法获取Appimage内的升级信息。
%1

此Appimage不支持升级。为了轻松升级，请联系作者在Appimage内添加升级信息。</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to check for updates:

%1</source>
        <translation>检查更新失败：

%1</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>An update has been found for the AppImage %1</source>
        <translation>已发现 AppImage %1 的一个更新</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Do you want to perform the update?</source>
        <translation>你想要执行更新吗？</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Remove old AppImage after successful update</source>
        <translation>更新成功后移除旧 AppImage</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Failed to update AppImage:

%1</source>
        <translation>更新 AppImage 失败：

%1</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>File reported as updated does not exist: %1</source>
        <translation>报告为已更新的文件不存在： %1</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed to register updated AppImage in system</source>
        <translation>未能在系统中注册已更新 AppImage</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Failed to unregister old AppImage in system</source>
        <translation>未能在系统中注销旧 AppImage</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Failed to remove old AppImage</source>
        <translation>移除旧 AppImage 失败</translation>
    </message>
    <message>
        <location filename="../src/daemon/main.cpp" line="+101"/>
        <source>Tracks AppImages in applications directories (user&apos;s, system and other ones). Automatically integrates AppImages moved into those directories and unintegrates ones removed from them.</source>
        <translation>在应用程序文件夹（用户，系统和其他目录）中跟踪 AppImage。 自动集成移动到这些文件夹中的 AppImage，并取消集成从其中删除的 AppImage。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Lists directories watched by this daemon and exit</source>
        <translation>列出此守护程序监视的文件夹并退出</translation>
    </message>
</context>
<context>
    <name>RemoveDialog</name>
    <message>
        <source>Please confirm</source>
        <translation type="vanished">请确认</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Are you sure you want to remove this AppImage?&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="vanished">&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;您确定要移除此 AppImage 吗？&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/remove.ui" line="+17"/>
        <source>Delete AppImage</source>
        <translation>删除 AppImage</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Are you sure you want to delete this AppImage?&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;您确定要删除此 AppImage 吗?&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>%1</source>
        <translation>%1</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Uncheck to only remove the desktop integration, but leave the file on the system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="vanished">&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;取消勾选则仅删除桌面集成，但将文件保留在系统上。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Remove AppImage file from system</source>
        <translation type="vanished">从系统中移除 AppImage 文件</translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="../src/ui/settings_dialog.ui" line="+14"/>
        <source>AppImageLauncher Settings</source>
        <translation>AppImageLauncher 设置</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Launcher Dialog</source>
        <translation>启动器对话框</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Ask whether to move AppImage files into the applications directory</source>
        <translation>询问是否将 AppImage 文件移动到应用程序文件夹中</translation>
    </message>
    <message>
        <location line="+119"/>
        <source>General settings</source>
        <translation>通用设置</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, AppImageLauncher automatically starts a daemon called appimagelauncherd.&lt;/p&gt;&lt;p&gt;This daemon automatically integrates AppImages you copy into the &amp;quot;Applications directory&amp;quot; and the additional directories you configured. When the files are deleted, the daemon will clean up the integration data.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;选中此框后，AppImageLauncher 会自动启动一个名为 appimagelauncherd 的守护程序。&lt;/p&gt;&lt;p&gt;此守护程序自动集成复制到 &amp;quot;Applications 文件夹&amp;quot;及其它您配置的文件夹中的 AppImage。删除文件后，守护程序将清除集成数据。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Auto start auto-integration daemon</source>
        <translation>自动启动自动集成守护程序</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Additional directories to watch</source>
        <translation>要监视的其文件夹</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Add new directory to list</source>
        <translation>向列表中添加新的文件夹</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Remove selected directory from list</source>
        <translation>从列表中删除选定的文件夹</translation>
    </message>
    <message>
        <location line="-144"/>
        <source>Applications directory path</source>
        <translation>应用程序文件夹路径</translation>
    </message>
    <message>
        <location line="-11"/>
        <source>Location where to store your AppImage files to ease their management</source>
        <translation>存储 AppImage 文件以简化其管理的位置</translation>
    </message>
    <message>
        <location line="+49"/>
        <source>Available Features</source>
        <translation>可用功能</translation>
    </message>
    <message>
        <location filename="../src/ui/settings_dialog.cpp" line="+40"/>
        <source>updater available for AppImages supporting AppImageUpdate</source>
        <translation>可用于支持 AppImageUpdate 的 AppImage 的更新程序</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>updater unavailable</source>
        <translation>有可用更新</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>&lt;strong&gt;Note: this is an AppImageLauncher Lite build, only supports a limited set of features&lt;/strong&gt;&lt;br /&gt;Please install the full version via the provided native packages to enjoy the full AppImageLauncher experience</source>
        <translation>&lt;strong&gt;注意：这是一个 AppImageLauncher Lite 版本，仅支持有限的功能集&lt;/strong&gt;&lt;br /&gt;请通过提供的原生软件包安装完整版，以享受完整的 AppImageLauncher 体验</translation>
    </message>
    <message>
        <location line="+137"/>
        <source>Select Applications directory</source>
        <translation>选择应用程序文件夹</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Select additional directory to watch</source>
        <translation>选择监视的其他文件夹</translation>
    </message>
</context>
</TS>
