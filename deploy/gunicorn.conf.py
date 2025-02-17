# Gunicorn configuration file
import multiprocessing

# Server socket
bind = "127.0.0.1:8000"
backlog = 2048

# Worker processes
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = 'sync'
worker_connections = 1000
timeout = 30
keepalive = 2

# Logging
accesslog = '/var/log/gunicorn/indusfashion_access.log'
errorlog = '/var/log/gunicorn/indusfashion_error.log'
loglevel = 'info'

# Process naming
proc_name = 'indusfashion_gunicorn'

# Server mechanics
daemon = False
pidfile = '/var/run/gunicorn/indusfashion.pid'
user = 'www-data'
group = 'www-data'

# SSL
# keyfile = '/path/to/privkey.pem'
# certfile = '/path/to/cert.pem'

# Server hooks
def on_starting(server):
    pass

def on_reload(server):
    pass

def on_exit(server):
    pass
