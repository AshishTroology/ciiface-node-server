var EmailTemplate = {};
site = 'https://fleetware.io';

EmailTemplate.account = function (data) {
	return  '   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">  '  + 
 '   <html style="width:100%;font-family:arial, helvetica neue, helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">  '  + 
 '    <head>   '  + 
 '     <meta charset="UTF-8">   '  + 
 '     <meta content="width=device-width, initial-scale=1" name="viewport">   '  + 
 '     <meta name="x-apple-disable-message-reformatting">   '  + 
 '     <meta http-equiv="X-UA-Compatible" content="IE=edge">   '  + 
 '     <meta content="telephone=no" name="format-detection">   '  + 
 '     <title>Copy of Fleetware account activation</title>  '  + 
 '     <style type="text/css">  '  + 
 '   @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } .es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }  '  + 
 '   #outlook a {  '  + 
 '   	padding:0;  '  + 
 '   }  '  + 
 '   .ExternalClass {  '  + 
 '   	width:100%;  '  + 
 '   }  '  + 
 '   .ExternalClass,  '  + 
 '   .ExternalClass p,  '  + 
 '   .ExternalClass span,  '  + 
 '   .ExternalClass font,  '  + 
 '   .ExternalClass td,  '  + 
 '   .ExternalClass div {  '  + 
 '   	line-height:100%;  '  + 
 '   }  '  + 
 '   .es-button {  '  + 
 '   	mso-style-priority:100!important;  '  + 
 '   	text-decoration:none!important;  '  + 
 '   }  '  + 
 '   a[x-apple-data-detectors] {  '  + 
 '   	color:inherit!important;  '  + 
 '   	text-decoration:none!important;  '  + 
 '   	font-size:inherit!important;  '  + 
 '   	font-family:inherit!important;  '  + 
 '   	font-weight:inherit!important;  '  + 
 '   	line-height:inherit!important;  '  + 
 '   }  '  + 
 '   .es-desk-hidden {  '  + 
 '   	display:none;  '  + 
 '   	float:left;  '  + 
 '   	overflow:hidden;  '  + 
 '   	width:0;  '  + 
 '   	max-height:0;  '  + 
 '   	line-height:0;  '  + 
 '   	mso-hide:all;  '  + 
 '   }  '  + 
 '   </style>   '  + 
 '    </head>   '  + 
 '    <body style="width:100%;font-family:arial, helvetica neue, helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">   '  + 
 '     <div class="es-wrapper-color" style="background-color:#F6F6F6;">   '  + 
 '      <!--[if gte mso 9]>  '  + 
 '   			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">  '  + 
 '   				<v:fill type="tile" color="#f6f6f6"></v:fill>  '  + 
 '   			</v:background>  '  + 
 '   		<![endif]-->   '  + 
 '      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">   '  + 
 '        <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   '  + 
 '         <td style="padding:0;Margin:0;">   '  + 
 '          <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">   '  + 
 '            <tr style="border-collapse:collapse;">   '  + 
 '             <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0"> <img src="'+site+'/email/ac/images/blank.gif" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px;" alt="" width="600" height="1"> </td>   '  + 
 '            </tr>   '  + 
 '          </table> </td>   '  + 
 '        </tr>   '  + 
 '        <tr style="border-collapse:collapse;">   '  + 
 '         <td valign="top" style="padding:0;Margin:0;">   '  + 
 '          <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;">   '  + 
 '            <tr style="border-collapse:collapse;">   '  + 
 '             <td align="center" style="padding:0;Margin:0;">   '  + 
 '              <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">   '  + 
 '                <tr style="border-collapse:collapse;">   '  + 
 '                 <td align="left" style="padding:0;Margin:0;">   '  + 
 '                  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">   '  + 
 '                    <tr style="border-collapse:collapse;">   '  + 
 '                     <td width="600" align="center" valign="top" style="padding:0;Margin:0;">   '  + 
 '                      <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">   '  + 
 '                        <tr style="border-collapse:collapse;">   '  + 
 '                         <td align="center" style="padding:0;Margin:0;"> <img class="adapt-img" src="'+site+'/email/ac/images/95691538460860946.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="600"></td>   '  + 
 '                        </tr>   '  + 
 '                      </table> </td>   '  + 
 '                    </tr>   '  + 
 '                  </table> </td>   '  + 
 '                </tr>   '  + 
 '              </table> </td>   '  + 
 '            </tr>   '  + 
 '          </table>   '  + 
 '          <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">   '  + 
 '            <tr style="border-collapse:collapse;">   '  + 
 '             <td align="center" style="padding:0;Margin:0;">   '  + 
 '              <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">   '  + 
 '                <tr style="border-collapse:collapse;">   '  + 
 '                 <td style="Margin:0;padding-left:25px;padding-right:25px;padding-top:40px;padding-bottom:40px;background-repeat:no-repeat;" align="left">   '  + 
 '                  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">   '  + 
 '                    <tr style="border-collapse:collapse;">   '  + 
 '                     <td width="550" valign="top" align="center" style="padding:0;Margin:0;">   '  + 
 '                      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">   '  + 
 '                        <tr style="border-collapse:collapse;">   '  + 
 '                         <td class="es-m-txt-c" align="center" style="padding:0;Margin:0;padding-bottom:20px;"> <h2 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:georgia, times, times new roman, serif;font-size:24px;font-style:normal;font-weight:normal;color:#666666;">Thank you for signing up with FleetWare. <br/ >Experience the most efficient way of transportation!</h2></td>   '  + 
 '                        </tr>   '  + 
 '                        <tr style="border-collapse:collapse;">   '  + 
 '                         <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:5px;padding-right:5px;padding-bottom:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:120%;color:#666666;">Your Account has been successfully created. Please click the button below to validate and create password for your FleetWare account.</p></td>   '  + 
 '                        </tr>   '  + 
 '                        <tr style="border-collapse:collapse;">   '  + 
 '                         <td class="es-m-txt-c" align="center" style="padding:0;Margin:0;"> <span class="es-button-border" style="border-style:solid;border-color:transparent;background:#00A953;border-width:0px;display:inline-block;border-radius:30px;width:auto;"><a href="'+data+'" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif;font-size:16px;color:#FFFFFF;border-style:solid;border-color:#00A953;border-width:10px 20px;display:inline-block;background:#00A953;border-radius:30px;font-weight:normal;font-style:normal;line-height:120%;width:auto;text-align:center;">Create Your Password</a></span></td>   '  + 
 '                        </tr>   '  + 
 '                      </table> </td>   '  + 
 '                    </tr>   '  + 
 '                  </table> </td>   '  + 
 '                </tr>   '  + 
 '              </table> </td>   '  + 
 '            </tr>   '  + 
 '          </table>   '  + 
 '          <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;">   '  + 
 '            <tr style="border-collapse:collapse;">   '  + 
 '             <td align="center" style="padding:0;Margin:0;">   '  + 
 '              <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F0F0F0;border-top:1px solid #FF80AB;" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#f0f0f0">   '  + 
 '                <tr style="border-collapse:collapse;">   '  + 
 '                 <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;">   '  + 
 '                  <!--[if mso]><table width="560" cellpadding="0"  '  + 
 '                               cellspacing="0"><tr><td width="180" valign="top"><![endif]-->   '  + 
 '                  <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">   '  + 
 '                    <tr style="border-collapse:collapse;">   '  + 
 '                     <td class="es-m-p0r es-m-p20b" width="180" valign="top" align="center" style="padding:0;Margin:0;">   '  + 
 '                      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">   '  + 
 '                        <tr style="border-collapse:collapse;">   '  + 
 '                         <td align="left" style="padding:0;Margin:0;padding-bottom:15px;"> <a target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#999999;"> <img src="'+site+'/email/ac/images/13101538113041671.png" alt="logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" title="logo" width="135"> </a> </td>   '  + 
 '                        </tr>   '  + 
 '                        <tr style="border-collapse:collapse;">   '  + 
 '                         <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:150%;color:#999999;"><a target="_blank" href="mailto:support@fleetware.io" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#999999;">support@fleetware.io</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:150%;color:#999999;">© 2018 FleetWare</p></td>   '  + 
 '                        </tr>   '  + 
 '                      </table> </td>   '  + 
 '                    </tr>   '  + 
 '                  </table>   '  + 
 '                  <!--[if mso]></td><td width="20"></td><td width="360" valign="top"><![endif]-->   '  + 
 '                  <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">   '  + 
 '                    <tr style="border-collapse:collapse;">   '  + 
 '                     <td width="360" align="left" style="padding:0;Margin:0;">   '  + 
 '                      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">   '  + 
 '                        <tr style="border-collapse:collapse;">   '  + 
 '                         <td align="left" style="padding:0;Margin:0;padding-bottom:15px;">   '  + 
 '                          <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">   '  + 
 '                            <tr style="border-collapse:collapse;">   '  + 
 '                             <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"> <img title="Facebook" src="'+site+'/email/ac/images/facebook-logo-colored-bordered.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td>   '  + 
 '                             <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"> <img title="Twitter" src="'+site+'/email/ac/images/twitter-logo-colored-bordered.png" alt="Tw" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td>   '  + 
 '                             <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"> <img title="Instagram" src="'+site+'/email/ac/images/instagram-logo-colored-bordered.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td>   '  + 
 '                             <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"> <img title="Youtube" src="'+site+'/email/ac/images/youtube-logo-colored-bordered.png" alt="Yt" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td>   '  + 
 '                             <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"> <img title="Pinterest" src="'+site+'/email/ac/images/pinterest-logo-colored-bordered.png" alt="P" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td>   '  + 
 '                             <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"> <img title="Last.fm" src="'+site+'/email/ac/images/lastfm-logo-colored-bordered.png" alt="Lf" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td>   '  + 
 '                            </tr>   '  + 
 '                          </table> </td>   '  + 
 '                        </tr>   '  + 
 '                        <tr style="border-collapse:collapse;">   '  + 
 '                         <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:150%;color:#999999;">You are receiving this email because you have visited our site or asked us about regular newsletter. Please contact us at support@fleetware.io if you have any queries.</p></td>   '  + 
 '                        </tr>   '  + 
 '                      </table> </td>   '  + 
 '                    </tr>   '  + 
 '                  </table>   '  + 
 '                  <!--[if mso]></td></tr></table><![endif]--> </td>   '  + 
 '                </tr>   '  + 
 '              </table> </td>   '  + 
 '            </tr>   '  + 
 '          </table>   '  + 
 '          <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">   '  + 
 '            <tr style="border-collapse:collapse;">   '  + 
 '             <td align="center" style="padding:0;Margin:0;">   '  + 
 '              <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">   '  + 
 '                <tr style="border-collapse:collapse;">   '  + 
 '                 <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;">   '  + 
 '                  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">   '  + 
 '                    <tr style="border-collapse:collapse;">   '  + 
 '                     <td width="560" valign="top" align="center" style="padding:0;Margin:0;">   '  + 
 '                      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">   '  + 
 '                        <tr style="border-collapse:collapse;">   '  + 
 '                         <td class="es-infoblock" align="center" style="padding:0;Margin:0;line-height:120%;font-size:12px;color:#CCCCCC;"> <a target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC;"> <img src="'+site+'/email/ac/images/26531538113931718.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="100"> </a> </td>   '  + 
 '                        </tr>   '  + 
 '                      </table> </td>   '  + 
 '                    </tr>   '  + 
 '                  </table> </td>   '  + 
 '                </tr>   '  + 
 '              </table> </td>   '  + 
 '            </tr>   '  + 
 '          </table> </td>   '  + 
 '        </tr>   '  + 
 '      </table>   '  + 
 '     </div>   '  + 
 '     <div class="banner-toolbar">   '  + 
 '     </div>    '  + 
 '    </body>  '  + 
 '  </html>  ' ;


}
module.exports = EmailTemplate;