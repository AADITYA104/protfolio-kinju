@echo off
echo ===================================================
echo     Launching Kinjal Goswami's Portfolio...
echo     Please wait, this will open in your browser
echo ===================================================
cd /d "%~dp0"

echo.
echo Starting local server...
echo 1. A browser window will open automatically on THIS PC.
echo 2. To open on PHONE: Scan the QR code shown below.
echo.
echo (Do not close this window while viewing the site)
echo.

call npm run dev

pause
