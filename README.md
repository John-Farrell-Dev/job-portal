Here is a detailed explanation of each step to deploy the project on AWS Lightsail instance:
## Step 1: Create an AWS Lightsail Instance
	0.	Go to the AWS Lightsail home page.
	0.	Click on the "Create instance" button.
	0.	Choose the Node.js platform.
	0.	Select the desired instance plan and region.
	0.	Give your instance a unique name.
	0.	Click on the "Create instance" button to create the instance.

## Step 2: Connect to the Instance Using SSH
	0.	Open an SSH client such as Terminal (MacOS) or PuTTY (Windows).
	0.	Use the following command to connect to your Lightsail instance: bash Copy  ssh -i <path_to_private_key> ubuntu@<instance_ip_address> 
	•	Replace <path_to_private_key> with the path to your Lightsail private key file.
	•	Replace <instance_ip_address> with the IP address of your Lightsail instance.
		
## Step 3: Clone Your React App Repository
	0.	In the instance terminal, navigate to the directory where you want to clone your React app repository: cd /job-portal/frontend
	0.	Clone your React app repository: git clone https://github.com/John-Farrell-Dev/job-portal

## Step 4: Install Dependencies for the React App
	1.	Navigate to the directory containing your React app: cd /job-portal/frontend

		Install the required dependencies: npm install

## Step 5: Build the React App
	0.	In the same directory, build the React app: npm run build 

## Step 6: Clone Your Django Backend Repository
	1.	Navigate to the directory where you want to clone your Django backend repository: cd /job-portal/backend
	2.	Clone your Django backend repository: git clone clonehttps://github.com/John-Farrell-Dev/job-portal 

## Step 7: Install Dependencies for the Django Backend
	1.	Navigate to the directory containing your Django backend: cd /job-portal/backend
	1.	Install the required dependencies: pip install -r requirements.txt 

## Step 8: Configure the Django Backend to Run on a Different Port
	0.	In the Django settings, specify a different port number for the backend to run on.
	•	For example, set the PORT environment variable to 8000: export PORT=8000 
	•	Alternatively, modify the settings.py file to include: import os
	•	PORT = int(os.environ.get('PORT', 8000)) 

## Step 9: Set Up a Reverse Proxy Using a Web Server
	0.	Install a web server such as NGINX: sudo apt update
	0.	sudo apt install nginx 
	0.	Configure the web server to act as a reverse proxy:
	•	Edit the NGINX configuration file:  sudo nano /etc/nginx/sites-available/default 
	•	Add the following configuration: nginx  server {
	•	  listen 80;
	•	  server_name example.com;
	•	
	•	  location / {
	•	    proxy_pass http://127.0.0.1:3000;
	•	    proxy_http_version 1.1;
	•	    proxy_set_header Upgrade $http_upgrade;
	•	    proxy_set_header Connection 'upgrade';
	•	    proxy_set_header Host $host;
	•	    proxy_cache_bypass $http_upgrade;
	•	  }
	•	
	•	  location /api {
	•	    proxy_pass http://127.0.0.1:8000;
	•	    proxy_set_header Host $host;
	•	    proxy_set_header X-Real-IP $remote_addr;
	•	    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	•	    proxy_set_header X-Forwarded-Proto $scheme;
	•	  }
	•	} 
	0.	Save the configuration and restart the web server: sudo systemctl restart nginx 

## Step 10: Start the React App and Django Backend
	1.	Start the React app:
	•	Navigate to the React app directory: cd /job-portal/frontend

	•	Run the following command: npm start 
	3.	Start the Django backend:
	•	Open another terminal window and navigate to the Django backend directory: cd /job-portal/backend 
	•	Run the following command: python manage.py runserver 

## Step 11: Access Your App
	1.	Open your web browser.
	2.	Enter the Lightsail instance IP address in the address bar.
	3.	Your React app with Django as the backend should now be accessible.
