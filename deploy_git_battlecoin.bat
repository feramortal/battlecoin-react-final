
@echo off
REM Configurar nome e email do Git
git config --global user.name "feramortal"
git config --global user.email "feramortal@email.com"

REM Iniciar repositório (caso ainda não esteja)
git init

REM Adicionar arquivos e fazer commit
git add .
git commit -m "deploy limpo"

REM Criar branch main e empurrar para GitHub
git branch -M main
git remote add origin https://github.com/feramortal/battlecoin-react-final.git
git push -u origin main

pause
