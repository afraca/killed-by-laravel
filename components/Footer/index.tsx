import { FC } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const SocialLink: FC<{ url: string; imgSrc: string; altText: string }> = ({
    url,
    imgSrc,
    altText,
}) => {
    return (
        <Link href={url} className={styles.socialLink} target='_blank' rel='noopener noreferrer'>
            <img
                className={styles.socialImage}
                width='24px'
                height='24px'
                src={imgSrc}
                alt={altText}
            />
        </Link>
    );
};

// Components now use CSS modules

const Footer = () => (
    <>
        <footer className={styles.footerContainer}>
            <div className={styles.flexWrap}>
                <div className={styles.footerTitle}>
                    <div className={styles.tombstoneIcon}>
                        <img height="60px" width="60px" src='https://static.killedbygoogle.com/com/tombstone-alt.svg' alt="Tombstone" />
                    </div>
                    <div className={styles.title}>Killed by Laravel</div>
                </div>
                <div>
                    <p>
                        Killed by Laravel is the Laravel graveyard; a free and open source
                        list of discontinued Laravel services, products, devices, and apps.
                        We aim to be a source of factual information about the history
                        surrounding Laravel&apos;s dead projects.
                    </p>
                    <p>
                        This project is a fork of&nbsp;
                        <a
                            href="https://github.com/codyogden/killedbygoogle"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Killed by Google
                        </a>
                        . This fork was done by&nbsp;
                        <a
                            href="https://github.com/afraca"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sije Harkema
                        </a>
                        .
                    </p>
                </div>
                <div className={styles.copyNotice}>
                    <a href="https://github.com/afraca/killed-by-laravel/blob/main/LICENSE">
                        &copy; {(new Date()).getFullYear()} Sije Harkema.
                    </a>
                </div>
                <div className={styles.socialWrapper}>
                    <SocialLink
                        url="https://github.com/afraca/killed-by-laravel"
                        altText="GitHub"
                        imgSrc='https://static.killedbygoogle.com/com/github.svg'
                    />
                </div>
            </div>
        </footer>
    </>
);
export default Footer;
