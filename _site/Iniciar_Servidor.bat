@echo off
echo ========================================================
echo Iniciando Servidor Local de Iberlanda...
echo ========================================================
echo.
echo NOTA: La pagina estara disponible en:
echo http://127.0.0.1:4000/Iberlanda/
echo.
echo Para apagar el servidor, cierra esta ventana.
echo.
set SSL_CERT_FILE=C:\Users\LU420777\eroski_ca.pem
call jekyll serve --livereload
pause
