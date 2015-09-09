define([],{init:function($templateCache){  'use strict';

  $templateCache.put('ui/input-form/input-form.html',
    "<div class=chat-input-form><input type=text class=\"form-control message-box\" ng-model=\"message\"> <button class=\"btn btn-primary submit-button\" ng-click=submitMessage()>Send</button></div>"
  );


  $templateCache.put('ui/message-list/message-list.html',
    "<ul><li ng-repeat=\"message in messageList\">{{message}}</li></ul>"
  );
}});