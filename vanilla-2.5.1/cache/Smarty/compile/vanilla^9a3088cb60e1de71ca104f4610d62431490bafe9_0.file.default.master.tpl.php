<?php
/* Smarty version 3.1.31, created on 2017-06-15 23:04:49
  from "/git/vanilla/applications/dashboard/views/default.master.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_594312914019b7_91487758',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '9a3088cb60e1de71ca104f4610d62431490bafe9' => 
    array (
      0 => '/git/vanilla/applications/dashboard/views/default.master.tpl',
      1 => 1497543736,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_594312914019b7_91487758 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_asset')) require_once '/git/vanilla/library/SmartyPlugins/function.asset.php';
if (!is_callable('smarty_function_link')) require_once '/git/vanilla/library/SmartyPlugins/function.link.php';
if (!is_callable('smarty_function_logo')) require_once '/git/vanilla/library/SmartyPlugins/function.logo.php';
if (!is_callable('smarty_function_searchbox')) require_once '/git/vanilla/library/SmartyPlugins/function.searchbox.php';
if (!is_callable('smarty_function_discussions_link')) require_once '/git/vanilla/library/SmartyPlugins/function.discussions_link.php';
if (!is_callable('smarty_function_activity_link')) require_once '/git/vanilla/library/SmartyPlugins/function.activity_link.php';
if (!is_callable('smarty_function_custom_menu')) require_once '/git/vanilla/library/SmartyPlugins/function.custom_menu.php';
if (!is_callable('smarty_function_breadcrumbs')) require_once '/git/vanilla/library/SmartyPlugins/function.breadcrumbs.php';
if (!is_callable('smarty_function_module')) require_once '/git/vanilla/library/SmartyPlugins/function.module.php';
if (!is_callable('smarty_function_vanillaurl')) require_once '/git/vanilla/library/SmartyPlugins/function.vanillaurl.php';
if (!is_callable('smarty_function_event')) require_once '/git/vanilla/library/SmartyPlugins/function.event.php';
?>
<!DOCTYPE html>
<html lang="<?php echo $_smarty_tpl->tpl_vars['CurrentLocale']->value['Lang'];?>
">
<head>
    <?php echo smarty_function_asset(array('name'=>"Head"),$_smarty_tpl);?>

</head>
<body id="<?php echo $_smarty_tpl->tpl_vars['BodyID']->value;?>
" class="<?php echo $_smarty_tpl->tpl_vars['BodyClass']->value;?>
">
<div id="Frame">
    <div class="Head" id="Head">
        <div class="Row">
            <strong class="SiteTitle"><a href="<?php echo smarty_function_link(array('path'=>"/"),$_smarty_tpl);?>
"><?php echo smarty_function_logo(array(),$_smarty_tpl);?>
</a></strong>

            <div class="SiteSearch"><?php echo smarty_function_searchbox(array(),$_smarty_tpl);?>
</div>
            <ul class="SiteMenu">
                
                <?php echo smarty_function_discussions_link(array(),$_smarty_tpl);?>

                <?php echo smarty_function_activity_link(array(),$_smarty_tpl);?>

                
                <?php echo smarty_function_custom_menu(array(),$_smarty_tpl);?>

                
            </ul>
        </div>
    </div>
    <div id="Body">
        <div class="Row">
            <div class="BreadcrumbsWrapper"><?php echo smarty_function_breadcrumbs(array(),$_smarty_tpl);?>
</div>
            <div class="Column PanelColumn" id="Panel">
                <?php echo smarty_function_module(array('name'=>"MeModule"),$_smarty_tpl);?>

                <?php echo smarty_function_asset(array('name'=>"Panel"),$_smarty_tpl);?>

            </div>
            <div class="Column ContentColumn" id="Content"><?php echo smarty_function_asset(array('name'=>"Content"),$_smarty_tpl);?>
</div>
        </div>
    </div>
    <div id="Foot">
        <div class="Row">
            <a href="<?php echo smarty_function_vanillaurl(array(),$_smarty_tpl);?>
" class="PoweredByVanilla" title="Community Software by Vanilla Forums">Forum Software
                Powered by Vanilla</a>
            <?php echo smarty_function_asset(array('name'=>"Foot"),$_smarty_tpl);?>

        </div>
    </div>
</div>
<?php echo smarty_function_event(array('name'=>"AfterBody"),$_smarty_tpl);?>

</body>
</html>
<?php }
}
