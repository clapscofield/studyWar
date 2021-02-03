# StudyWar - Engenharia de software 
Sistema de ponte entre instituições e estudantes (sistema com duas visões, uma da instituição e outra para o aluno) para a motivação de estudos por meio da competição entre equipes das horas estudadas. 

**Mais detalhes - BACKLOG e QUADRO DA SPRINT DISPONÍVEL EM**: https://www.notion.so/StudyWar-2f3decdce5f54889b1e6d7c7de6adf8

# Equipe:
- Clarisse Scofield Lenzoni
- Renato Polanczyk Resende
- Othávio Ruddá da Cunha Araújo
- Arthur Veloso Kuahara

# Demanda
Com o início da pandemia, notou-se como os alunos precisam cada vez mais de uma melhor disciplina para conseguir se desenvolver com os estudos à distância. A partir disso, surgiu uma demanda. Um caso concreto e real: uma instituição que promove o estudo de meninas iniciou uma "Guerra de estudos" através de post-its e troca de mensagens, baseadas na confiança, para que as garotas estivessem mais motivadas para o estudo indivídual por meio das equipes. A Guerra de Estudos hoje já acontece de forma "improvisada", por isso, tivemos a ideia de desenvolver realmente a aplicação para que a ideia fosse aplicada de forma mais eficaz e se difundisse para outras intituições, visto como trouxe resultados claros (visto em notas e constância) das estudantes.

# Objetivo
Desenvolver um sistema para instituições conectarem a seus estudantes e obterem uma maior motivação para os estudos.

# Como funciona o StudyWar
As funcionalidades serão pontuadas abaixo. Aqui descrevemos o funcionamento geral.
O StudyWar surgiu com base no já existente jogo de tabuleiro War. Uma instituição, por exemplo, o DCC da UFMG decide cadastrar a sua turma de Engenharia de Software 2020/2. A instituição cadastra cada aluno de sua turma (que terá um código de acesso diferente) e cria grupos aleatórios para as equipes com o máximo de 5 alunos. Criadas as equipes, a instituição decide as datas de início da partida: nesse caso, poderia-se começar no início do semestre e ter fim no final do semestre (a duração do curso de ES). 
O próximo passo é dos alunos. Cada aluno entra com o seu código recebido da instituição no jogo do StudyWar. Lá ele irá ligar o crônometro regressivo toda vez que iniciar seus estudos. Cada hora estudada por aluno dá um certo número de pontos para a equipe que permite com que cada equipe vá conquistando diferentes países do mundo baseados nos seus pontos. 
No final da partida, no fim do semestre, a equipe que tiverem mais conquista - dominarem o mundo! - irão receber o prêmio instituído como motivação pela instituição.

# Funcionalidades principais
## Instituição
  - Cadastrar-se
  - Cadastrar turma
  - Cadastrar os alunos da turma
  - Criar nova partida de StudyWar (datas de início/fim e equipes dos alunos)
  - Visualizar como estão as conquistas das equipes
  
## Estudante
  - Entrar com o código dado pela instituição 
  - Criar tempo de estudo: setar o relógio do studywar pelo tempo que estará estudando. 
  - Verificar informações sobre a partida do StudyWar (dados da Instituição, premio, datas)
  - Visualizar a pontuação das outras equipes na página inicial.

# Proposta de tecnologias
  - Frontend: Javascript, React
  - Backend: Node.js, Express
  - Banco de dados: MongoDB ou MySQL (a definir)
