<form action="https://s1713433073.t.eloqua.com/e/f2" id="form35" method="post" name="CC_Generic_Short_Form">

  <input name="elqFormName" type="hidden" value="CC_Generic_Short_Form">
  <input name="elqSiteId" type="hidden" value="1713433073">
  <input name="elqCampaignId" type="hidden">

  <div class="form-group has-feedback">
    <label for="first">First Name</label>
    <input id="field0" class="form-control" name="first" type="text" value="" />
  </div>

  <div class="form-group has-feedback">
    <label for="last">Last Name</label>
    <input id="field1" class="form-control" name="last" type="text" value="" />
  </div>

  <div class="form-group has-feedback">
    <label for="emailAddress">Email Address</label>
    <input id="field2" class="form-control" name="emailAddress" type="text" value="" />
  </div>

  <div class="checkbox">
    <label>
      <input name="singleCheckbox" type="checkbox" value="on"> I would like to receive email updates.
    </label>
  </div>
  
  <!-- Community Code -->
  <input id="field3" name="com" type="hidden" value="<?php echo $commInfo[$commGet]['commcode'] ?>">

  <input id="field4" name="campaign" type="hidden" value="Erickson_Website">
  <input id="field6" name="ILorCC" type="hidden" value="CC">

  <!-- Redirect url/Thank You page link -->
  <input id="field7" name="redirect" type="hidden" value="<?php echo $commInfo[$commGet]['ccbrochurety'] ?>">
  
  <!-- Spam Trap -->
  <div id="formElement16" style="display: none;">
    <label for="Address2">What color is the sky?</label>
    <input id="field8" name="Address2" type="text" value="">
    <label>Just say blue</label>
  </div>

  <!-- Email Response Code -->
  <input id="field9" name="emailResponse" type="hidden" value="<?php echo $commInfo[$commGet]['form35response'] ?>">

  <!-- Submit Button: Note Google UTM tracking onclick. Campaign Name needs to be changed. -->
  <button class="btn btn-success btn-lg" onclick="ga('send', 'event', 'Button', '<?php echo $commInfo[$commGet]['commcode'] ?>', '<?php echo $commInfo[$commGet]['commcode'] ?> CAMPAIGN NAME');" type="submit" value="Submit">Request Brochure</button>

</form>