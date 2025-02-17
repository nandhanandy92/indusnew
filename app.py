import logging
from flask import Flask, render_template, request, flash
from flask_mail import Mail, Message

app = Flask(__name__)
app.secret_key = 'Indus Fashion'  # Required for flash messages

# Flask-Mail Configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'ranjithpython072@gmail.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = 'xstn jyzt audy bviw'  # Use environment variable for security

mail = Mail(app)

# Configure Logging
logging.basicConfig(
    filename='/var/log/nginx/indusfashion/application.log',  # Log file name
    level=logging.INFO,  # Logging level
    format='%(asctime)s - %(levelname)s - %(message)s'  # Log format
)

@app.route('/contact-us', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        phone = request.form.get('phone')

        # Prepare email content
        subject = "New Contact Form Submission"
        recipient = "indusfashions18@gmail.com"
        cc_recipient = "rayappareddy18@gmail.com"
        message_body = f"Name: {name}\nPhone: {phone}"

        # Send Email
        try:
            msg = Message(subject, sender=app.config['MAIL_USERNAME'], recipients=[recipient])
            msg.cc = [cc_recipient]
            msg.body = message_body
            mail.send(msg)
            flash("Email sent successfully!", "success")
            logging.info(f"Email sent successfully to {recipient} with cc to {cc_recipient}.")
        except Exception as e:
            error_message = f"An error occurred while sending email: {str(e)}"
            flash(error_message, "danger")
            logging.error(error_message)

    return render_template('contact.html')

@app.route('/')
def index():
    logging.info("Index page accessed.")
    return render_template('index.html')

# Other routes
@app.route('/combocorporate')
def combocorporate():
    logging.info("Combo Corporate page accessed.")
    return render_template("combocorporate.html")

@app.route('/corporate')
def corporate():
    logging.info("Corporate page accessed.")
    return render_template('corporate.html')

@app.route('/ecatalog')
def ecatalog():
    logging.info("Ecatalog page accessed.")
    return render_template('ecatalog.html')

@app.route('/masterschool')
def masterschool():
    logging.info("Master School page accessed.")
    return render_template('masterschool.html')

@app.route('/ourclients')
def ourclients():
    logging.info("Our Clients page accessed.")
    return render_template('ourclients.html')

@app.route('/product')
def product():
    logging.info("Product page accessed.")
    return render_template('product.html')

@app.route('/school')
def school():
    logging.info("School page accessed.")
    return render_template('school.html')

# Error Handlers
@app.errorhandler(404)
def not_found(e):
    logging.warning(f"404 Error: {request.url} not found.")
    return render_template('400.html'), 404

@app.errorhandler(500)
def server_error(e):
    logging.error(f"500 Error: Internal server error at {request.url}.")
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run()
