#!/bin/bash

# This script must be run with sudo privileges
if [ "$EUID" -ne 0 ]; then 
    echo "Please run as root (sudo)"
    exit 1
fi

# Create necessary directories
mkdir -p /var/log/gunicorn
mkdir -p /var/run/gunicorn

# Set proper permissions
chown www-data:www-data /var/log/gunicorn
chown www-data:www-data /var/run/gunicorn

# Copy Nginx configuration
cp nginx.conf /etc/nginx/sites-available/indusfashion
ln -sf /etc/nginx/sites-available/indusfashion /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Copy systemd service file
cp indusfashion.service /etc/systemd/system/

# Reload systemd daemon
systemctl daemon-reload

# Start and enable services
systemctl enable indusfashion
systemctl start indusfashion
systemctl restart nginx

echo "Deployment setup completed!"
echo "Check status with: systemctl status indusfashion"
echo "Check logs with: tail -f /var/log/gunicorn/indusfashion_*.log"
