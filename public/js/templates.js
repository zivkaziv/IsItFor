angular.module('MyApp').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center">\n  <h1>404</h1>\n  <p>Page Not Found</p>\n</div>');
$templateCache.put('partials/contact.html','<div class="container">\n  <div class="panel">\n    <div class="panel-heading">\n      <h3 class="panel-title">Contact Form</h3>\n    </div>\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="sendContactForm()" class="form-horizontal">\n        <div class="form-group">\n          <label for="name" class="col-sm-2">Name</label>\n          <div class="col-sm-8">\n            <input type="text" name="name" id="name" class="form-control" ng-model="contact.name" autofocus>\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="email" class="col-sm-2">Email</label>\n          <div class="col-sm-8">\n            <input type="email" name="email" id="email" class="form-control" ng-model="contact.email">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="message" class="col-sm-2">Body</label>\n          <div class="col-sm-8">\n            <textarea name="message" id="message" rows="7" class="form-control" ng-model="contact.message"></textarea>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-sm-offset-2 col-sm-8">\n            <button type="submit" class="btn btn-success">Send</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>');
$templateCache.put('partials/footer.html','<footer>\n  <p>\xA9 2016 Company, Inc. All Rights Reserved.</p>\n</footer>');
$templateCache.put('partials/forgot.html','<div class="container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="forgotPassword()">\n        <legend>Forgot Password</legend>\n        <div class="form-group">\n          <p>Enter your email address below and we\'ll send you password reset instructions.</p>\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" placeholder="Email" class="form-control" ng-model="user.email" autofocus>\n        </div>\n        <button type="submit" class="btn btn-success">Reset Password</button>\n      </form>\n    </div>\n  </div>\n</div>');
$templateCache.put('partials/header.html','<nav ng-controller="HeaderCtrl" class="navbar navbar-expand-lg navbar-light bg-light">\n  <!--<div class="container">-->\n    <div class="navbar-header">\n      <!--<button type="button" data-toggle="collapse" data-target="#navbar" class="navbar-toggle collapsed">-->\n        <!--<span class="sr-only">Toggle navigation</span>-->\n        <!--<span class="icon-bar"></span>-->\n        <!--<span class="icon-bar"></span>-->\n        <!--<span class="icon-bar"></span>-->\n      <!--</button>-->\n        <!--Brand-->\n      <a href="/" class="navbar-brand" style="height: 100%; padding:0">\n          <img style="height: 50px;width: auto;" src="/resources/img/logo_trans.png" alt="Is it for me?">\n        <!--<img src="/resources/img/logo_trans.png">-->\n      </a>\n    </div>\n    <div id="navbar" class="navbar-collapse collapse">\n      <ul class="nav navbar-nav">\n        <!--<li ng-class="{ active: isActive(\'/\')}"><a href="/">Home</a></li>-->\n        <!--<li ng-class="{ active: isActive(\'/about\')}"><a href="/contact">About</a></li>-->\n      </ul>\n      <ul ng-if="isAuthenticated()" class="nav navbar-nav ml-auto">\n        <li class="dropdown">\n          <a href="#" data-toggle="dropdown" class="navbar-avatar dropdown-toggle">\n            <img ng-src="{{currentUser.picture || currentUser.gravatar}}"> {{currentUser.name || currentUser.email || currentUser.id}} <i class="caret"></i>\n          </a>\n          <ul class="dropdown-menu">\n            <li><a href="/account">My Account</a></li>\n            <li class="divider"></li>\n            <li><a href="#" ng-click="logout()"}>Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n      <ul ng-if="!isAuthenticated()" class="nav navbar-nav ml-auto">\n        <li ng-class="{ active: isActive(\'/login\')}" class="nav-link"><a href="/login">Log in</a></li>\n        <li ng-class="{ active: isActive(\'/signup\')}" class="nav-link"><a href="/signup">Sign up</a></li>\n      </ul>\n    </div>\n  <!--</div>-->\n</nav>\n');
$templateCache.put('partials/home.html','<div class="container-fluid">\n  <div class="row">\n    <div class="col-sm-4">\n      <div class="panel">\n        <div class="panel-body">\n          <h3>Heading</h3>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n            condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n            Donec sed odio dui.</p>\n          <a href="#" role="button" class="btn btn-default">View details</a>\n        </div>\n      </div>\n    </div>\n    <div class="col-sm-4">\n      <div class="panel">\n        <div class="panel-body">\n          <h3>Heading</h3>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n            condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n            Donec sed odio dui.</p>\n          <a href="#" role="button" class="btn btn-default">View details</a>\n        </div>\n      </div>\n    </div>\n    <div class="col-sm-4">\n      <div class="panel">\n        <div class="panel-body">\n          <h3>Heading</h3>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n            condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n            Donec sed odio dui.</p>\n          <a href="#" role="button" class="btn btn-default">View details</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/landing.html','<div class="container-fluid" style="background: white; height: 100%;">\n    <!-- Masthead -->\n    <header class="masthead text-white text-center">\n        <div class="overlay"></div>\n        <div class="container">\n            <div class="row">\n                <div class="col-xl-9 mx-auto">\n                    <h1 class="mb-5">Build a landing page for your business or project and generate more leads!</h1>\n                </div>\n                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">\n                    <form>\n                        <div class="form-row">\n                            <div class="col-12 col-md-9 mb-2 mb-md-0">\n                                <input type="email" class="form-control form-control-lg" placeholder="Enter your email...">\n                            </div>\n                            <div class="col-12 col-md-3">\n                                <button type="submit" class="btn btn-block btn-lg btn-primary">Sign up!</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </header>\n\n    <!-- Icons Grid -->\n    <section class="features-icons bg-light text-center">\n        <div class="container">\n            <div class="row">\n                <div class="col-lg-4">\n                    <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">\n                        <div class="features-icons-icon d-flex">\n                            <i class="icon-screen-desktop m-auto text-primary"></i>\n                        </div>\n                        <h3>Fully Responsive</h3>\n                        <p class="lead mb-0">This theme will look great on any device, no matter the size!</p>\n                    </div>\n                </div>\n                <div class="col-lg-4">\n                    <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">\n                        <div class="features-icons-icon d-flex">\n                            <i class="icon-layers m-auto text-primary"></i>\n                        </div>\n                        <h3>Bootstrap 4 Ready</h3>\n                        <p class="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>\n                    </div>\n                </div>\n                <div class="col-lg-4">\n                    <div class="features-icons-item mx-auto mb-0 mb-lg-3">\n                        <div class="features-icons-icon d-flex">\n                            <i class="icon-check m-auto text-primary"></i>\n                        </div>\n                        <h3>Easy to Use</h3>\n                        <p class="lead mb-0">Ready to use with your own content, or customize the source files!</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Image Showcases -->\n    <section class="showcase">\n        <div class="container-fluid p-0">\n            <div class="row no-gutters">\n\n                <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url(\'img/bg-showcase-1.jpg\');"></div>\n                <div class="col-lg-6 order-lg-1 my-auto showcase-text">\n                    <h2>Fully Responsive Design</h2>\n                    <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it\'s a phone, tablet, or desktop the page will behave responsively!</p>\n                </div>\n            </div>\n            <div class="row no-gutters">\n                <div class="col-lg-6 text-white showcase-img" style="background-image: url(\'img/bg-showcase-2.jpg\');"></div>\n                <div class="col-lg-6 my-auto showcase-text">\n                    <h2>Updated For Bootstrap 4</h2>\n                    <p class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>\n                </div>\n            </div>\n            <div class="row no-gutters">\n                <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url(\'img/bg-showcase-3.jpg\');"></div>\n                <div class="col-lg-6 order-lg-1 my-auto showcase-text">\n                    <h2>Easy to Use &amp; Customize</h2>\n                    <p class="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Testimonials -->\n    <section class="testimonials text-center bg-light">\n        <div class="container">\n            <h2 class="mb-5">What people are saying...</h2>\n            <div class="row">\n                <div class="col-lg-4">\n                    <div class="testimonial-item mx-auto mb-5 mb-lg-0">\n                        <img class="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg" alt="">\n                        <h5>Margaret E.</h5>\n                        <p class="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>\n                    </div>\n                </div>\n                <div class="col-lg-4">\n                    <div class="testimonial-item mx-auto mb-5 mb-lg-0">\n                        <img class="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg" alt="">\n                        <h5>Fred S.</h5>\n                        <p class="font-weight-light mb-0">"Bootstrap is amazing. I\'ve been using it to create lots of super nice landing pages."</p>\n                    </div>\n                </div>\n                <div class="col-lg-4">\n                    <div class="testimonial-item mx-auto mb-5 mb-lg-0">\n                        <img class="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg" alt="">\n                        <h5>Sarah\tW.</h5>\n                        <p class="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Call to Action -->\n    <!--<section class="call-to-action text-white text-center">-->\n        <!--<div class="overlay"></div>-->\n        <!--<div class="container">-->\n            <!--<div class="row">-->\n                <!--<div class="col-xl-9 mx-auto">-->\n                    <!--<h2 class="mb-4">Ready to get started? Sign up now!</h2>-->\n                <!--</div>-->\n                <!--<div class="col-md-10 col-lg-8 col-xl-7 mx-auto">-->\n                    <!--<form>-->\n                        <!--<div class="form-row">-->\n                            <!--<div class="col-12 col-md-9 mb-2 mb-md-0">-->\n                                <!--<input type="email" class="form-control form-control-lg" placeholder="Enter your email...">-->\n                            <!--</div>-->\n                            <!--<div class="col-12 col-md-3">-->\n                                <!--<button type="submit" class="btn btn-block btn-lg btn-primary">Sign up!</button>-->\n                            <!--</div>-->\n                        <!--</div>-->\n                    <!--</form>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</section>-->\n\n    <!-- Footer -->\n    <footer class="footer bg-light">\n        <div class="container">\n            <div class="row">\n                <div class="col-lg-6 h-100 text-center text-lg-left my-auto">\n                    <ul class="list-inline mb-2">\n                        <li class="list-inline-item">\n                            <a href="#">About</a>\n                        </li>\n                        <li class="list-inline-item">&sdot;</li>\n                        <li class="list-inline-item">\n                            <a href="#">Contact</a>\n                        </li>\n                        <li class="list-inline-item">&sdot;</li>\n                        <li class="list-inline-item">\n                            <a href="#">Terms of Use</a>\n                        </li>\n                        <li class="list-inline-item">&sdot;</li>\n                        <li class="list-inline-item">\n                            <a href="#">Privacy Policy</a>\n                        </li>\n                    </ul>\n                    <p class="text-muted small mb-4 mb-lg-0">&copy; Start Bootstrap 2017. All Rights Reserved.</p>\n                </div>\n                <div class="col-lg-6 h-100 text-center text-lg-right my-auto">\n                    <ul class="list-inline mb-0">\n                        <li class="list-inline-item mr-3">\n                            <a href="#">\n                                <i class="fa fa-facebook fa-2x fa-fw"></i>\n                            </a>\n                        </li>\n                        <li class="list-inline-item mr-3">\n                            <a href="#">\n                                <i class="fa fa-twitter fa-2x fa-fw"></i>\n                            </a>\n                        </li>\n                        <li class="list-inline-item">\n                            <a href="#">\n                                <i class="fa fa-instagram fa-2x fa-fw"></i>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </footer>\n</div>\n');
$templateCache.put('partials/login.html','<div class="container login-container">\n  <div class="card" style="padding:15px">\n    <div class="card-block">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <form ng-submit="login()">\n        <legend>Log In</legend>\n        <div class="form-group">\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" placeholder="Email" class="form-control" ng-model="user.email" autofocus>\n        </div>\n        <div class="form-group">\n          <label for="password">Password</label>\n          <input type="password" name="password" id="password" placeholder="Password" class="form-control" ng-model="user.password">\n        </div>\n        <div class="form-group"><a href="/forgot"><strong>Forgot your password?</strong></a></div>\n        <button type="submit" class="btn btn-success">Log in</button>\n      </form>\n      <div class="hr-title"><span>or</span></div>\n      <div class="btn-toolbar text-center">\n        <button class="btn btn-facebook" ng-click="authenticate(\'facebook\')">Sign in with Facebook</button>\n      </div>\n    </div>\n  </div>\n  <p class="text-center">\n    Don\'t have an account? <a href="/signup"><strong>Sign up</strong></a>\n  </p>\n</div>\n');
$templateCache.put('partials/profile.html','<div class="container">\n  <div class="card">\n    <div class="card-block">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="updateProfile()" class="form-horizontal">\n        <legend>Profile Information</legend>\n        <div class="form-group">\n          <label for="email" class="col-sm-3">Email</label>\n          <div class="col-sm-7">\n            <input type="email" name="email" id="email" class="form-control" ng-model="profile.email">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="name" class="col-sm-3">Name</label>\n          <div class="col-sm-7">\n            <input type="text" name="name" id="name" class="form-control" ng-model="profile.name">\n          </div>\n        </div>\n        <div class="form-group">\n          <label class="col-sm-3">Gender</label>\n          <div class="col-sm-4">\n            <label class="radio-inline radio col-sm-4">\n              <input type="radio" name="gender" value="male" ng-checked="profile.gender === \'male\'"><span>Male</span>\n            </label>\n            <label class="radio-inline col-sm-4">\n              <input type="radio" name="gender" value="female" ng-checked="profile.gender === \'female\'"><span>Female</span>\n            </label>\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="location" class="col-sm-3">Location</label>\n          <div class="col-sm-7">\n            <input type="text" name="location" id="location" class="form-control" ng-model="profile.location">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="website" class="col-sm-3">Website</label>\n          <div class="col-sm-7">\n            <input type="text" name="website" id="website" class="form-control" ng-model="profile.website">\n          </div>\n        </div>\n        <div class="form-group">\n          <label class="col-sm-3">Gravatar</label>\n          <div class="col-sm-4">\n            <img ng-src="{{profile.gravatar}}" class="profile" width="100" height="100">\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-sm-offset-3 col-sm-4">\n            <button type="submit" class="btn btn-success">Update Profile</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class="card">\n    <div class="card-block">\n      <form ng-submit="changePassword()" class="form-horizontal">\n        <legend>Change Password</legend>\n        <div class="form-group">\n          <label for="password" class="col-sm-3">New Password</label>\n          <div class="col-sm-7">\n            <input type="password" name="password" id="password" class="form-control" ng-model="profile.password">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="confirm" class="col-sm-3">Confirm Password</label>\n          <div class="col-sm-7">\n            <input type="password" name="confirm" id="confirm" class="form-control" ng-model="profile.confirm">\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-sm-4 col-sm-offset-3">\n            <button type="submit" class="btn btn-success">Change Password</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class="panel">\n    <div class="panel-body">\n      <div class="form-horizontal">\n        <legend>Linked Accounts</legend>\n        <div class="form-group">\n          <div class="col-sm-offset-3 col-sm-4">\n            <p>\n              <a href="#" ng-click="unlink(\'facebook\')" ng-if="currentUser.facebook" class="text-danger">Unlink your Facebook account</a>\n              <a href="#" ng-click="link(\'facebook\')" ng-if="!currentUser.facebook">Link your Facebook account</a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="card">\n    <div class="card-block">\n      <form ng-submit="deleteAccount()" class="form-horizontal">\n        <legend>Delete Account</legend>\n        <div class="form-group">\n          <p class="col-sm-offset-3 col-sm-9">You can delete your account, but keep in mind this action is irreversible.</p>\n          <div class="col-sm-offset-3 col-sm-9">\n            <button type="submit" class="btn btn-danger">Delete my account</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/reset.html','<div class="container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n        <form ng-submit="resetPassword()">\n          <legend>Reset Password</legend>\n          <div class="form-group">\n            <label for="password">New Password</label>\n            <input type="password" name="password" id="password" placeholder="New password" class="form-control" ng-model="user.password" autofocus>\n          </div>\n          <div class="form-group">\n            <label for="confirm">Confirm Password</label>\n            <input type="password" name="confirm" id="confirm" placeholder="Confirm password" class="form-control" ng-model="user.confirm">\n          </div>\n          <div class="form-group">\n            <button type="submit" class="btn btn-success">Change Password</button>\n          </div>\n        </form>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/signup.html','<div class="container login-container">\n  <div class="card" style="padding:15px">\n    <div class="card-block">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <form ng-submit="signup()">\n        <legend>Create an account</legend>\n        <div class="form-group">\n          <label for="name">Name</label>\n          <input type="text" name="name" id="name" placeholder="Name" class="form-control" ng-model="user.name" autofocus>\n        </div>\n        <div class="form-group">\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" placeholder="Email" class="form-control" ng-model="user.email">\n        </div>\n        <div class="form-group">\n          <label for="password">Password</label>\n          <input type="password" name="password" id="password" placeholder="Password" class="form-control" ng-model="user.password">\n        </div>\n        <div class="form-group">\n          <small class="text-muted">By signing up, you agree to the <a href="/">Terms of Service</a>.</small>\n        </div>\n        <button type="submit" class="btn btn-success">Create an account</button>\n      </form>\n      <div class="hr-title"><span>or</span></div>\n      <div class="btn-toolbar text-center">\n        <button class="btn btn-facebook" ng-click="authenticate(\'facebook\')">Sign in with Facebook</button>\n      </div>\n    </div>\n  </div>\n  <p class="text-center">\n    Already have an account? <a href="/login"><strong>Log in</strong></a>\n  </p>\n</div>\n');}]);