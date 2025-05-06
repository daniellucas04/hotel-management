### Requisitos não funcionais

<table border=1>
    <thead>
        <tr>
            <th>Nome do requisito</th>
            <th>Descrição</th>
            <th>Detalhes do recurso / tecnologia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>RNF01 - Desempenho</td>
            <td>O sistema deve suportar até 10.000 requisições simultâneas e fornecer tempo de carregamento da página inicial de no máximo 1,5 segundo para 90% dos usuários.</td>
            <td>Versão e Licença: Desenvolvido com Next.js (versão 13.4 ou superior), sob licença MIT.</td>
        </tr>
        <tr>
            <td>RNF02 - Confiabilidade</td>
            <td>O sistema deve garantir a execução consistente de todas as operações críticas, com capacidade de recuperação automatizada em até 3 minutos após falhas.</td>
            <td>Versão e Licença: Implementado com serviços gerenciados da AWS (como EC2 e RDS), conforme termos de serviço da AWS.</td>
        </tr>
        <tr>
            <td>RNF03 - Disponibilidade</td>
            <td>O sistema deve ter uma taxa de disponibilidade de 99,98% anual, utilizando mecanismos de alta disponibilidade (HA) e balanceamento de carga.</td>
            <td>Versão e Licença: Utiliza AWS Elastic Load Balancer e Auto Scaling, conforme licença AWS Service Terms.</td>
        </tr>
        <tr>
            <td>RNF04 - Conformidade</td>
            <td>O sistema deve estar em conformidade com a LGPD, implementando anonimização de dados pessoais e logs detalhados para auditoria de consentimento.</td>
            <td>Versão e Licença: Banco de dados configurado com MySQL (versão 8.0+), sob licença GPLv2.</td>
        </tr>
        <tr>
            <td>RNF05 - Portabilidade</td>
            <td>O sistema deve ser acessível em diferentes plataformas (desktop, mobile, tablet) e navegadores modernos, com design responsivo.</td>
            <td>Versão e Licença: Desenvolvido com TailwindCSS (versão 3.3 ou superior) e FlowBite React (versão 1.0+), ambas sob licença MIT.</td>
        </tr>
        <tr>
            <td>RNF06 - Segurança</td>
            <td>Todas as conexões devem ser protegidas por HTTPS e proteção contra ataques como SQL Injection e XSS.</td>
            <td>Versão e Licença: Utiliza AWS Identity and Access Management (IAM) e MySQL (versão 8.0 com criptografia habilitada), conforme licenças AWS Service Terms e GPLv2.</td>
        </tr>
    </tbody>
</table>