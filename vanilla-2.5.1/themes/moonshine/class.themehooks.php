<?php
class ThemeHooks implements Gdn_IPlugin {
       public function Setup() {
       }
       public function OnDisable() {
       }
        public function Base_Render_Before($Sender) {
            if (($Sender->MasterView == 'default' || $Sender->MasterView == '')) {
            $Sender->AddJsFile('script.js', 'themes/moonshine/js');
            }
     }
    }

?>