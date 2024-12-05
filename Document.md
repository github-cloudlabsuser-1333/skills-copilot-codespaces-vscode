# Creating a Virtual Network in Azure Portal

Follow these steps to create a virtual network in the Azure Portal:

## Step 1: Sign in to Azure Portal
1. Go to [Azure Portal](https://portal.azure.com).
2. Sign in with your Azure account credentials.

## Step 2: Create a Virtual Network
1. In the left-hand menu, select **Create a resource**.
2. In the **Search the Marketplace** box, type **Virtual Network** and press **Enter**.
3. Select **Virtual Network** from the search results.
4. Click **Create**.

## Step 3: Configure the Virtual Network
1. In the **Basics** tab, enter the following information:
    - **Subscription**: Select your subscription.
    - **Resource group**: Select an existing resource group or create a new one.
    - **Name**: Enter a name for your virtual network.
    - **Region**: Select the region where you want to create the virtual network.

2. Click **Next: IP Addresses**.

## Step 4: Configure IP Addresses
1. In the **IP Addresses** tab, configure the following:
    - **IPv4 address space**: Enter the address space in CIDR notation (e.g., 10.0.0.0/16).
    - **Subnets**: Add one or more subnets by clicking **+ Add subnet** and entering the subnet name and address range.

2. Click **Next: Security**.

## Step 5: Configure Security
1. In the **Security** tab, configure the following options as needed:
    - **BastionHost**: Enable or disable BastionHost.
    - **DDoS Protection**: Enable or disable DDoS protection.
    - **Firewall**: Enable or disable Azure Firewall.

2. Click **Next: Tags**.

## Step 6: Add Tags
1. In the **Tags** tab, add any tags you want to associate with the virtual network. Tags are key-value pairs that help you organize your resources.

2. Click **Next: Review + create**.

## Step 7: Review and Create
1. Review the configuration settings.
2. Click **Create** to create the virtual network.

## Conclusion
You have successfully created a virtual network in the Azure Portal. You can now use this virtual network to deploy and manage your Azure resources.
