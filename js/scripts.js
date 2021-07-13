add_action( 'admin_init', 'redirect_non_logged_users_to_specific_page' );

redirect_non_logged_users_to_specific_page = () => {

if ( !is_user_logged_in() && is_page('add page slug or ID here') && $_SERVER['PHP_SELF'] != '/wp-admin/admin-ajax.php' ) {

wp_redirect( 'https://https://campaign-initiative-tracker.netlify.app/login.html' ); 
    exit;
   }
}


const pwaAuth = document.querySelector("pwa-auth");
pwaAuth.addEventListener("signin-completed", ev => {
    const signIn = ev.detail;
    if (signIn.error) {
        console.error("Sign in failed", signIn.error);
    } else {
        console.log("Email: ", signIn.email);
        console.log("Name: ", signIn.name);
        console.log("Picture: ", signIn.imageUrl);
        console.log("Provider (MS, Google, FB): ", signIn.provider);
        console.log("Raw data from provider: ", signIn.providerData);
    }
});

