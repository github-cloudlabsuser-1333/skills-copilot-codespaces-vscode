# Variables
$resourceGroupName = "<your-resource-group-name>"
$location = "<your-location>"
$storageAccountName = "<your-storage-account-name>"

# Login to Azure
Connect-AzAccount

# Create Resource Group if it doesn't exist
if (-not (Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue)) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create Storage Account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName "Standard_LRS" `
                     -Kind "StorageV2"