import React from "react";
import "./styles.css";
import SignUpInformationItem from "../SignUpInformationItem";
class SignUpInformation extends React.Component {
  render() {
    return (
      <div>
        <h2>Pourquoi créer un compte ?</h2>
        <SignUpInformationItem
          title="Ganer du temps"
          description="Publiez vos annonces rapidement, avec vos informations pré-remplies chaque fois que vous souhaitez déposez une nouvelle annonce."
          icon="far fa-clock fa-3x"
        />
        <SignUpInformationItem
          title="Soyez les premiers informés"
          description="Créer des alertes Immo ou Emploi et ne manquez jamais l'annonce qui vous intéresse."
          icon="fas fa-bell fa-3x"
        />
        <SignUpInformationItem
          title="Visibilité"
          description="Suivez les statistiques de vos annonces (nombre de fois où votre annonce a été vue, nombre de contacts reçus)."
          icon="fas fa-eye fa-3x"
        />
      </div>
    );
  }
}

export default SignUpInformation;
