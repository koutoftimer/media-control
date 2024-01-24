# What is it?

Simple python server that allows to send media keys to control media playback.

# Why?

I was to lazy to find existing solutions and this is one works pretty well as
well as took very little time to implement.

# How to use?

You need to install python (I suppose, current stable version should work).
Create virtual environment and install `flask` and `pynput` packages. Start the
server. Figure out your network address and open it in your phone (flask server
should print an address).

On \*nix like OS:

```
$ python -m venv venv
$ . venv/bin/activate
$ pip install -r requirements.txt
$ flask --app server run -h 0.0.0.0
 * Serving Flask app 'server'
 * Debug mode: off
INFO:werkzeug:WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:5000
 * Running on http://192.168.0.14:5000
INFO:werkzeug:Press CTRL+C to quit
```

On Windows:

```
> py -m venv venv
> .\venv\Scripts\activate.bat
> pip install -r requirements.txt
> flask --app server run -h 0.0.0.0
 * Serving Flask app 'server'
 * Debug mode: off
INFO:werkzeug:WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:5000
 * Running on http://192.168.0.14:5000
INFO:werkzeug:Press CTRL+C to quit
```

Open http://192.168.0.14:5000 in your phone. **Note:** your address may be different.
