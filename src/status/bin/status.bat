@ECHO OFF

    : @Authors @Colack
    :   - Last Updated by Colack    (9/1/22)
    : @About
    :   - Batch script to run the 'index.js' file.

    powershell write-host -fore White "CDO Status v1.1"
    powershell write-host -fore red Licensed under the MIT License
    powershell write-host -fore green CDO Open Source Team
    echo.
    echo Press any key to continue

    timeout 9999 > NUL

    cls

    echo --- Pick your mode ---
    echo "1 - Start"
    echo "2 - Instructions"
    echo "3 - Exit"
    echo.

    set /p mode="(1-3): "

    cls
    goto %mode%

    :1
        cls

        powershell write-host -fore red ---- Enter Project ID ----

        set /p projectID=. 

        cls

        powershell write-host -fore red ---- Enter Code Typing ----

        set /p type=. 

        cls

        timeout 3 > NUL

        cls

        powershell write-host -fore red "---- Are you working on Project? (y/n)"

        set /p play=. 

        powershell write-host -fore green The Script is now running!
        powershell write-host -fore red You can stop it by typing Ctrl+C

        node . %projectID% %type% %play%

        cls
    EXIT /B 0

    :2
        powershell write-host -fore green ---- Hello, and welcome to the CDO Status. ---
        echo This tool is used to show when you are working on a code.org project on Discord!
        echo.
        timeout 3 > NUL
        powershell write-host -fore blue ---- How to find the Project ID ---
        echo.
        echo Go to your project and look at the URL.
        echo You should find a long string of jambled-looking characters.
        powershell write-host -fore cyan Example: https://studio.code.org/projects/applab/XgF_5GDAUQmr2UdIejZhHtjXx8wmBCxhKqkNavDk-lE
        echo 'gF_5GDAUQmr2UdIejZhHtjXx8wmBCxhKqkNavDk-lE' is the ID of that URL.
        powershell write-host -fore red Copy and paste that ID into this window once you are done.
        echo.
        timeout 3 > NUL
        powershell write-host -fore magenta ---- Code types ----
        echo.
        echo You will be prompted asking for your code typing.
        echo This part is completely optional. 
        echo This will appear as a little image in the corner of the status.
        powershell write-host -fore red "If you want block code like dance and play lab, just type the word 'block'."
        powershell write-host -fore green "If you want javascript code, which is game lab, just type the word 'js'."
        timeout 3 > NUL
        powershell write-host -fore red ---- Playing or Working ----
        echo You will be prompted asking if you are playing or working on the current project.
        echo "This will appear as a 'Are you working on project? (y/n)'"
        echo "If you type 'y' it will make your status 'working on: '."
        echo "If you type 'n' it will make your status 'playing: '."
        timeout 3 > NUL
        echo Press any key to Exit...
        timeout 9999 > NUL
    EXIT /B 0

    :3
        EXIT /B 0
    EXIT /B 0

    timeout 300 > NUL
