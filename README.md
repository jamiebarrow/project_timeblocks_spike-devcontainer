# timeblocks

Timeblocks is a utility to help you better track the blocks of time in your day.

## Spike - devcontainers

This repository contains a spike to try out devcontainers in order to have a consistent and easy to use developer experience.

## Setup

I first did some preparation steps.

First, we will be using containers, and on Windows we need to first install Windows Subsystem for Linux version 2 (WSL2).
This should be simple enough to do these days with the below command:

```shell
$ wsl --install --no-distribution
```

That should install everything you need for WSL2, and if so, skip the below [Manual installation steps][1].
Setting it up manually, may mean you'll need to enable the Virtual Machine Platform feature on Windows.
This can be done using the below command.

```shell
$ dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

 Alternatively, instead of running the above command, you can also reach it from
 `Control Panel > Programs > Programs and Features > Turn Windows features on or off`.
 Note that only the Virtual Machine Platform feature needs enabling, and NOT Windows Subsystem for Linux (which installs WSL1 and not WSL2).

Before continuing, I recommend to restart your computer, to ensure all features are fully installed and activated.

Open this repository inside Visual Studio Code.
The Microsoft Dev Containers extension should be installed in VS Code (I've added it as a workspace recommendation).

Either you should be prompted to open the workspace in a container, or you can click on the button in the bottom left corner of VS Code
which comes from the Dev Containers / Remote Containers extension, which should give an option to reopen the workspace in a container.

Without Docker installed, it will attempt to install Docker in WSL - which we want, since Docker Desktop would require a license,
and while that's usually the easiest way to get started with Docker, its not always possible to use that in a professional environment without a license.

Visual Studio should relaunch its window and try to connect to the container (could take a while).
I got an error initially, and I believe it is because for some reason the default WSL container stopped at some point while trying this step out.
However, a retry seemed to solve the issue.
The workspace should reload and be connected to the running container!

## References

- https://learn.microsoft.com/en-us/windows/wsl/install
- [Manual installation step][1]

[1]: https://learn.microsoft.com/en-us/windows/wsl/install-manual