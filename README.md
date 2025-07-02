# timeblocks

Timeblocks is a utility to help you better track the blocks of time in your day.

## Spike - devcontainers

This repository contains a spike to try out devcontainers in order to have a consistent and easy to use developer experience.

## Setup

I first did some preparation steps.

First, we will be using Podman for our containers, and on Windows we need to first install Windows Subsystem for Linux version 2 (WSL2).
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
 Control Panel > Programs > Programs and Features > Turn Windows features on or off.
 Note that only the Virtual Machine Platform feature needs enabling, and NOT Windows Subsystem for Linux (which installs WSL1 and not WSL2).

Before continuing, I recommend to restart your computer, to ensure all features are fully installed and activated.

You should now be ready to install Podman Desktop:

```shell
$ winget install --id RedHat.Podman-Desktop
```

Once you launch Podman Desktop, you'll be guided through the onboarding instructions to install Podman and create a Podman Virtual Machine.
After all these steps are done, you should be able to run the podman command in a command line:

```shell
$ podman ps
```

If you get the below error, it means you either haven't yet created the podman machine, or it needs to be started.

```shell
$ podman ps
Cannot connect to Podman. Please verify your connection to the Linux system using `podman system connection list`, or try `podman machine init` and `podman machine start` to manage a new Linux VM
Error: unable to connect to Podman socket: failed to connect: dial tcp 127.0.0.1:50465: connectex: No connection could be made because the target machine actively refused it.
```

You can start an existing podman machine using the below:

```shell
$ podman machine start
Starting machine "podman-machine-default"
API forwarding listening on: npipe:////./pipe/docker_engine

Docker API clients default to this address. You do not need to set DOCKER_HOST.
Machine "podman-machine-default" started successfully
```

Finally, the Microsoft Dev Containers extension is installed in VS Code (I've added it as a workspace recommendation).

## References

- https://learn.microsoft.com/en-us/windows/wsl/install
- [Manual installation step][1]

[1]: https://learn.microsoft.com/en-us/windows/wsl/install-manual