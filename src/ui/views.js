define([],{init:function($templateCache){  'use strict';

  $templateCache.put('ui/input-form/input-form.html',
    "<div class=chat-input-form><input type=text class=\"form-control message-box\" ng-model=\"message\"> <button class=\"btn btn-primary submit-button\" ng-click=submitMessage()>Send</button></div>"
  );


  $templateCache.put('ui/login-modal/login-modal.html',
    "<div class=login-modal><p>Welcome to the party! Who would you like to be known as?</p><div class=username-container><input type=text class=form-control ng-model=loggedInUser.username placeholder=\"Username\"></div><button class=\"btn btn-primary\" ng-click=submit()>Save</button></div>"
  );


  $templateCache.put('ui/message-list/message-list.html',
    "<ul><li ng-repeat=\"message in messageList\">{{message.message}}</li></ul>"
  );
}});