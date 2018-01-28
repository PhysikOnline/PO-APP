# INSTALLATION

## Installing [NodeJS][1]

NodeJS is used to execute Javascript outside of the browser. For supporting reasons i strongly recommend installing version `8.9.x`. Currently `8.9.4` is stable version which will be supported until the end of 2019. The `npm`-manager is responsible for loading all packages of any javascript projects.

Verify you have nodejs `8.9.4+` and npm `5.6.0+` installed:

```
nodejs -v
npm -v
```

## Installing [Ionic][2]

Ionic is used as a framework having its own styles including a huge amount of robust modules creating an HTML5-app. It shipps with components to easily test and publihs your app as a hybrid app working on your browser or any mobile phone aswell.

To get started execute:

```
npm install -g ionic cordova
```

You can, but don't have to, exclude `cordova` since it is only used for building mobile-apps and we don't need it yet for the PO-app. At this point you are ready to create your first app:

Now you can clone an existing github project using:

```
git clone git@github.com:PhysikOnline/PO-APP.git
```

or starting a new ionic-project:

```
ionic start
```

The above command will start an assistant to initialize your project. As a starting point select `blank`.

Do not integrate `Cordova` into your project for now. Since it is just a bigger boilerplate we don't need it for our project.

Follow the official instructions of [Ionic][2] for more information.

If you cloned your project or just set up a new one, you can start developing by goign into the project's directory and opening your IDE.
Using Visual Studio Code type:

```
cd ./myapp/
code .
```

## Installing [Sentry][3]

Since it is usefull to track errors, we use the service of sentry.io, but host it by ourselves. In this project sentry-feature is already set up on
[po-sentry.physikelearning.de][4]

Login to our sentry-server and generate an API-KEY with `project: access`-rights:

```
sentry-cli --url https://po-sentry.physikelearning.de/ login
```

Generate a release:

```
sentry-cli releases -o PhysikOnline -p PO-APP new 0.0.1
```

Upload files to sentry:

```
sentry-cli releases -o physikonline-iu -p po-app files 0.0.1 upload-sourcemaps --url-prefix / www/build
```

# TODO

* Configure Ionic monitoring
  * Adding sourcemaps

[1]: https://nodejs.org/en/
[2]: https://ionicframework.com/docs/intro/installation/
[3]: https://docs.sentry.io/clients/javascript/integrations/angular/
[4]: https://po-sentry.physikelearning.de
