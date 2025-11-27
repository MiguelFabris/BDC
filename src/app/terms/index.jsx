import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TopBar } from "../../components/TopBar";

export default function Terms() {
    return(
        <View style={{ flex: 1 }}>
            <TopBar />
            <View style={styles.container}>
            <Text style={styles.titulo}>TERMOS E POLÍTICA DE USO</Text>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.text}>1. Objetivo do Aplicativo O Banco Comunitário de Doações é uma plataforma digital de caráter social e sem fins lucrativos que tem como finalidade facilitar o encontro entre doadores e beneficiários, permitindo o compartilhamento de recursos de forma voluntária, gratuita e responsável. O aplicativo atua como intermediador, conectando as partes interessadas, sem participar diretamente da entrega, transporte ou validação dos itens oferecidos.{"\n"} 2. Cadastro e Uso da Plataforma Para utilizar as funcionalidades do sistema, o usuário deve realizar um cadastro informando dados básicos, como nome, e-mail, número de telefone e localização aproximada, além de selecionar o tipo de perfil (doador ou beneficiário). O usuário é responsável por fornecer informações verdadeiras e mantê-las atualizadas, comprometendo-se a utilizar o aplicativo de forma ética, segura e respeitosa. É estritamente proibido o uso do aplicativo para fins ilegais, comerciais, fraudulentos ou que possam causar danos a outros usuários. O envio de informações falsas, ofensivas ou enganosas também é expressamente vedado.{"\n"} 3. Responsabilidades dos Usuários Os doadores comprometem-se a disponibilizar itens em boas condições de uso ou consumo, limpos, funcionais e dentro do prazo de validade quando aplicável.  Os beneficiários, por sua vez, comprometem-se a utilizar os itens recebidos de forma ética, sem fins lucrativos, e respeitando as regras de convivência da comunidade. O aplicativo não se responsabiliza pela qualidade, origem, entrega, transporte ou destinação final dos itens doados, sendo cada transação de responsabilidade exclusiva dos usuários envolvidos.{"\n"} 4. Privacidade e Proteção de Dados O Banco Comunitário de Doações respeita a privacidade de todos os usuários e garante que o tratamento dos dados pessoais será feito em conformidade com a Lei nº 13.709/2018 – Lei Geral de Proteção de Dados Pessoais (LGPD). durante o uso do aplicativo, podem ser coletadas as seguintes informações: - Dados cadastrais (nome, e-mail, telefone, localização aproximada); - Informações de uso (histórico de doações e interações); - Dados opcionais, como fotos e descrições dos itens doados. Essas informações são utilizadas exclusivamente para: - Identificar e autenticar usuários; - Permitir a publicação e visualização de doações disponíveis; - Facilitar o contato entre doadores e beneficiários; - Melhorar a experiência de navegação e segurança do sistema. - Os dados coletados não são compartilhados com terceiros, exceto nos casos previstos em lei ou mediante autorização expressa do usuário. - O armazenamento é feito em ambiente seguro, com acesso restrito e medidas técnicas de proteção contra uso indevido, vazamento ou alteração indevida de informações.{"\n"} 5. Direitos do Usuário. De acordo com a LGPD, o usuário tem direito a: - Acessar os dados pessoais armazenados; - Corrigir informações incorretas ou desatualizadas; - Solicitar a exclusão de seus dados e da conta; - Revogar o consentimento de uso de informações; - Obter esclarecimentos sobre o tratamento de dados. Essas solicitações poderão ser feitas diretamente pelos canais de contato disponíveis no aplicativo.{"\n"} 6. Suspensão e Encerramento de Conta. A administração do Banco Comunitário de Doações poderá suspender ou excluir contas de usuários que descumprirem estes Termos de Uso, que utilizarem o aplicativo de forma indevida ou que comprometam a segurança e o bom funcionamento da plataforma.{"\n"} 7. Alterações dos Termos e da Política Os presentes Termos e Condições de Uso e a Política de Privacidade poderão ser alterados a qualquer momento, com o objetivo de aprimorar a transparência, a segurança e o funcionamento do sistema.  As alterações entrarão em vigor a partir da data de sua publicação no aplicativo, e o uso contínuo após as modificações implicará a aceitação integral das novas condições.{"\n"} 8. Responsabilidade da Plataforma O Banco Comunitário de Doações é um projeto de cunho social e educativo, sem fins comerciais, e atua apenas como meio de intermediação entre doadores e beneficiários.  A equipe responsável pelo sistema não se responsabiliza pela procedência, validade, integridade, transporte ou entrega dos itens publicados, nem por eventuais prejuízos decorrentes das interações entre usuários. Todas as doações e recebimentos devem ocorrer por iniciativa e responsabilidade das partes envolvidas.{"\n"} 9. Contato e Suporte Em caso de dúvidas, sugestões, reclamações ou solicitações relacionadas à privacidade e ao uso da plataforma, o usuário poderá entrar em contato com a equipe do projeto por meio do canal de suporte disponível no aplicativo ou pelo e-mail institucional informado na página inicial.{"\n"} 10. Disposições Finais O Banco Comunitário de Doações reafirma seu compromisso com a solidariedade, a responsabilidade social e o uso ético da tecnologia como ferramenta de transformação positiva.  Ao utilizar o aplicativo, o usuário compromete-se a respeitar as regras aqui estabelecidas e a contribuir para a construção de uma comunidade mais colaborativa, sustentável e humana. O uso do sistema implica plena concordância com todos os Termos e Condições de Uso e com esta Política de Privacidade, representando o consentimento livre e informado do usuário para o tratamento de seus dados e participação na rede de doações comunitárias.</Text>
                </View>
            </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#3c95fe',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3c95fe',
        paddingBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        marginLeft: -20,
    },
    text: {
        fontSize: 12,
        textAlign: 'center',
        color: '#ffffffff',
        margin: 20,
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffffff',
        marginTop: 10,
    }
})