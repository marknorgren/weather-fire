#!/bin/sh

rsync -vaz --exclude '.DS_Store' --rsh="ssh -l SSH_USERNAME" dist/. SSH_USERNAME:DEPLOY_PATH
