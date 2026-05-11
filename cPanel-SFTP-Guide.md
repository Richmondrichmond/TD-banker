# How to Access and Manage Your cPanel Files in VSCode

## Overview
You can now access your cPanel files through VSCode's SFTP extension. This guide will help you navigate and work with your remote files.

## Exploring Your cPanel Files

1. **Open the Explorer View**
   - Click on the Explorer icon in the VSCode sidebar (first icon)
   - You should see your local files and folders

2. **Access Remote Files**
   - Look for the "SFTP" section in the Explorer sidebar
   - If you don't see it, click on the "..." (more actions) button in the Explorer and look for SFTP options
   - Alternatively, press `Ctrl+Shift+P` to open the command palette and type "SFTP: List"

3. **Browse Remote Directories**
   - Click on the SFTP explorer to expand it
   - Navigate through your remote directories
   - Right-click on files or folders for additional options

## Working with Remote Files

1. **Edit Remote Files**
   - Click on a remote file to open and edit it
   - Changes will be automatically uploaded when you save (as configured in your sftp.json)

2. **Upload Files**
   - Right-click on a local file and select "Upload to..."
   - Or drag and drop files from your local explorer to the SFTP explorer

3. **Download Files**
   - Right-click on a remote file in the SFTP explorer and select "Download"

4. **Create New Files/Folders**
   - Right-click in the SFTP explorer and select "Create New File" or "Create New Folder"

## Troubleshooting

If you encounter issues:

1. **Refresh the Connection**
   - Right-click in the SFTP explorer and select "Refresh"
   - Or use the command palette (`Ctrl+Shift+P`) and type "SFTP: Refresh"

2. **Check Connection Settings**
   - Open `.vscode/sftp.json` to verify your connection settings
   - Make sure the host, username, password, and remotePath are correct

3. **Restart VSCode**
   - Sometimes a simple restart of VSCode can resolve connection issues

## Your Current Configuration

Your SFTP is configured to connect to:
- Host: cp3.hostsilo.com
- Username: juri24850784
- Remote Path: /

You can now browse and edit your cPanel files directly in VSCode!
