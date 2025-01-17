import React from 'react';
import Password from '~/components/partials/account/Password';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale, query, ...rest }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['auth'])),
            navigaTo: query?.to || '',
            RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY
        },
    }
}

export default function RegisterPage(props) {
    return (
        <>
            <div className="ps-page--my-account">
                <Password {...props} />
            </div>
        </>
    );
};