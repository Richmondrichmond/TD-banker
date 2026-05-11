# FTP Connection Test Script
$ftpHost = "cp3.hostsilo.com"
$ftpUser = "juri24850784"
$ftpPass = "Allah.66Allah.66"

Write-Host "Attempting to connect to $ftpHost..."

try {
    # Create FTP request
    $ftp = [System.Net.FtpWebRequest]::Create("ftp://$ftpHost/")
    $ftp.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectoryDetails
    $ftp.Credentials = New-Object System.Net.NetworkCredential($ftpUser, $ftpPass)
    $ftp.UsePassive = $true
    $ftp.UseBinary = $true
    $ftp.KeepAlive = $false
    $ftp.Timeout = 10000

    # Get response
    Write-Host "Getting response..."
    $response = $ftp.GetResponse()
    $stream = $response.GetResponseStream()
    $reader = New-Object System.IO.StreamReader($stream)
    
    # Read and display directory listing
    Write-Host "Directory listing:"
    Write-Host "----------------"
    $content = $reader.ReadToEnd()
    Write-Host $content
    Write-Host "----------------"
    
    # Clean up
    $reader.Close()
    $stream.Close()
    $response.Close()
    
    Write-Host "Connection successful!"
} catch {
    Write-Host "Error connecting to FTP server:"
    Write-Host $_.Exception.Message
}
