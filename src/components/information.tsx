import styles from '../styles/components/information.module.scss';

export default function Information() {
    return (
        <div className={styles.information}>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className={styles.fullContainer}>
                        <div className={styles.areaLightleft}>

                            <img src="/email.png" alt="" />
                            <p>Email
                                <span>nissin@nissinsolutions.com.br</span>
                            </p>
                        </div>
                    </div>

                    <div className={styles.fullContainer}>
                        <div className={styles.areaDarkBlue}>

                            <img src="/phone.png" alt="" />
                            <p>Telefones
                                <span>+55 (47) 3029-0985</span>
                                <span>+55 (47) 98849-6155</span>
                            </p>
                        </div>
                    </div>

                    <div className={styles.fullContainer}>
                        <div className={styles.areaLightright}>
                            <img src="/place.png" alt="" />
                            <p>Endereço
                                <span>Rua Rui Barbosa, 553 <br/>Joinville/SC - Brasil</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}