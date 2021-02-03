// import React from 'react';
import React, { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import { Button, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import LoginInstituicaoModal from "../../loginInstituicao";
import LoginEstudanteModal from "../../loginEstudante";
import VisualizarAlunosNavbar from "components/Navbars/VisualizarAlunosNavbar";


const Alunos = (props) => {
    useEffect(() => {
        document.body.classList.toggle("landing-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
          document.body.classList.toggle("landing-page");
        };
      }, []);
    
      const [modalLoginAberto, setModalLoginAberto] = useState(false);
      const [usuario, setUsuario] = useState(null);
      const [senha, setSenha] = useState(null);
    
      const [modalLoginEstAberto, setModalLoginEstAberto] = useState(false);
      const [usuarioEst, setUsuarioEst] = useState(null);
      const [senhaEst, setSenhaEst] = useState(null);

// const TabelaPontosAlunos = (props) => {
//     const { idGuerra, idInstituicao } = props;

//     const [alunos, setAlunos] = useState();

//     useEffect(() => {
//         const obterDadosAlunos = async () => {
//         await LandingInstManager.ObterAlunos().then(async (response) => {
//             setAlunos(response);
//         });
//         };
//         obterDadosAlunos();
//     }, []);  
  
return (
     <> 
        <VisualizarAlunosNavbar />  
        <div className="page-header">
            <img
                alt="..."
                className="path"
                src={require("assets/img/blob.png").default}
            />
            <img
                alt="..."
                className="path2"
                src={require("assets/img/path2.png").default}
            />
            <img
                alt="..."
                className="shapes triangle"
                src={require("assets/img/triunghiuri.png").default}
            />
            <img
                alt="..."
                className="shapes wave"
                src={require("assets/img/waves.png").default}
            />
            <img
                alt="..."
                className="shapes squares"
                src={require("assets/img/patrat.png").default}
            />
            <img
                alt="..."
                className="shapes circle"
                src={require("assets/img/cercuri.png").default}
            />
            <div className="content-center">
                <Table hover>
                <thead>
                    <tr>
                    <th>matrícula</th>
                    <th>nome</th>
                    <th>email</th>
                    <th>equipe</th>
                    <th>identificador sw</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>Larry</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </Table>
                {/* <Table responsive>
                    <thead>
                    <tr>
                        <th className="text-center">Matrícula</th>
                        <th>Nome</th>
                        <th>Equipe</th>
                        <th className="text-center">Horas estudadas</th>
                        <th className="text-right">Pontos totais</th>
                    </tr>
                    </thead>
                    <tbody>
                    {alunos &&
                        alunos.map((aluno) => (
                        <tr key={aluno._id}>
                            <td>{aluno.matricula}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.idEquipe}</td>
                            <td className="text-center">{aluno.horasEstudadas}</td>
                            <td className="text-center">{aluno.horasEstudadas * 23}</td>
                            <td />
                        </tr>
                        ))}
                    </tbody>
                </Table> */}
            </div>
        </div>
    </>
  );
}

export default Alunos;
