//* Dependencies imports
import { useSelector } from 'react-redux';

//* Style Import
import './style.scss';

//* Legals Component
const Legals = () =>{

    //* Dark Mode State
    const isDarkModeActive = useSelector((state) => state.darkMode)
    
    //* JSX Start

    return(
    <div class={ isDarkModeActive ? "mention dark" : "mention light"}>
        <h2>CREDITS / MENTIONS LEGALES </h2>
        <h2>CREDITS</h2>
        <h3>Site Web © Antoine Vaillant </h3>
        <h2>MENTIONS LEGALES</h2>
        <h4>1. PRÉSENTATION DU SITE. </h4>
        <p class="mention-p">
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique,
            il est précisé aux utilisateurs du site www.antoinevaillant.fr l'identité des différents intervenants dans le
            cadre de sa réalisation et de son suivi : <br />
            Propriétaire: Antoine Vaillant <br />

            Hébergeur: Hostinger, UAB Jonavos g. 60C, 44192 Kaunas, Lithuania <br />

            Crédits : © Antoine Vaillant <br /> </p>

        <h4>2. CONDITIONS GÉNÉRALES D’UTILISATION DU SITE ET DES SERVICES PROPOSÉS. </h4>
        <p class="mention-p">
            L’utilisation du site www.antoinevaillant.fr implique l’acceptation pleine et entière des conditions générales
            d’utilisation ci-après décrites. </p>

        <h4>3. DESCRIPTION DES SERVICES FOURNIS. </h4>
        <p class="mention-p">
            Le site www.antoinevaillant.fr a pour objet de fournir une information concernant l’ensemble des activités de
            Antoine Vaillant et s’efforce de fournir sur le site www.antoinevaillant.fr des informations aussi précises que
            possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences
            dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces
            informations. Tous les informations indiquées sur le site www.antoinevaillant.fr sont données à titre
            indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site
            www.antoinevaillant.fr ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été
            apportées depuis leur mise en ligne. </p>

        <h4>4. LIMITATIONS CONTRACTUELLES SUR LES DONNÉES TECHNIQUES. </h4>
        <p class="mention-p">
        Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages
        matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant
        un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour </p>

        <h4>5. PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS. </h4>
        <p class="mention-p">
            Antoine Vaillant est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous
            les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons,
            logiciels. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des
            éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
            préalable de Antoine Vaillant. Toute exploitation non autorisée du site ou de l’un quelconque des éléments
            qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux
            dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle. </p>

        <h4>6. LIMITATIONS DE RESPONSABILITÉ. </h4>
        <p class="mention-p">
            Antoine Vaillant ne pourra être tenue responsable des dommages directs et indirects causés au matériel de
            l’utilisateur, lors de l’accès au site www.antoinevaillant.fr, et résultant soit de l’utilisation d’un matériel
            ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une
            incompatibilité. Antoine Vaillant ne pourra également être tenue responsable des dommages indirects (tels par
            exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site
            www.antoinevaillant.fr.
        </p>

        <h4>7. GESTION DES DONNÉES PERSONNELLES. </h4>
        <p class="mention-p">
            En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi
            n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
            A l'occasion de l'utilisation du site www.antoinevaillant.fr peuvent êtres recueillies : l'URL des liens par
            l'intermédiaire desquels l'utilisateur a accédé au site www.antoinevaillant.fr le fournisseur d'accès de
            l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur. Aucune information personnelle de
            l'utilisateur du site www.antoinevaillant.fr n'est publiée à l'insu de l'utilisateur, échangée, transférée,
            cédée ou vendue sur un support quelconque à des tiers.
        </p>

        <h4>8. LIENS HYPERTEXTES ET COOKIES. </h4>
        <p class="mention-p">
            Le site www.antoinevaillant.fr contient un certain nombre de liens hypertextes vers d’autres sites, mis en
            place avec l’autorisation de Antoine Vaillant Cependant, Antoine Vaillant n’a pas la possibilité de vérifier le
            contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait. La
            navigation sur le site <br />

            www.antoinevaillant.fr est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de
            l’utilisateur.
        </p>

        <h4>9. DROIT APPLICABLE ET ATTRIBUTION DE JURIDICTION. </h4>
        <p class="mention-p">
            Tout litige en relation avec l’utilisation du site www.antoinevaillant.fr est soumis au droit français.
            Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à
            l'informatique, aux fichiers et aux libertés.
            Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.
        </p>
    </div>
    )
}

//* Export Component
export default Legals;
