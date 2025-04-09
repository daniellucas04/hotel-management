### Requisitos funcionais

<table border=1>
    <thead>
        <tr>
            <th>Nome do requisito</th>
            <th>Descrição</th>
            <th>Entradas</th>
            <th>Origem</th>
            <th>Saída</th>
            <th>Destino</th>
            <th>Ação</th>
            <th>Pré-condição</th>
            <th>Pós-condição</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>RF01 - Entrar no sistema</td>
            <td>Permite o funcionário acessar o sistema.</td>
            <td>
                • login (varchar(50))<br>
                • senha (varchar(255))<br>
            </td>
            <td>Formulário de login</td>
            <td>Mensagem de sucesso ou erro</td>
            <td>Banco de dados, tabela de LOG</td>
            <td>Validar o login e senha do funcionário</td>
            <td>O funcionário deve estar cadastrado no sistema</td>
            <td>É redirecionado para a dashboard do sistema</td>
        </tr>
        <tr>
            <td>RF02 - Cadastrar Funcionário</td>
            <td>Permite o cadastro de um novo funcionário no sistema.</td>
            <td>
                • nome (varchar(50)) <br>
                • sobreNome (varchar(100))<br>
                • cpf (varchar(14))<br>
                • telefone1 (varchar(14))<br>
                • telefone2 (varchar(14))<br>
                • email (varchar(100))<br>
                • endereço (varchar(200))<br>
                • login (varchar(50))<br>
                • senha (varchar(255))<br>
                • foto (varchar(255))<br>
                • cargoFuncionario (int)<br>
            </td>
            <td>Formulário de cadastro de funcionário</td>
            <td>Mensagem de sucesso ou erro</td>
            <td>Banco de dados de funcionários</td>
            <td>
                1. Validar campos obrigatórios <br>
                2. Verificar unicidade do CPF <br>
                3. Salvar os dados no banco <br>
            </td>
            <td>Usuário deve estar autenticado como gerente.</td>
            <td>Funcionário cadastrado com sucesso.</td>
        </tr>
        <tr>
            <td>RF03 - Excluir Funcionário</td>
            <td>Permite a exclusão de um funcionário cadastrado.</td>
            <td>
                • idFuncionario (int) <br>
                • nome (varchar(50)) <br>
            </td>
            <td>Interface de consulta de funcionários</td>
            <td>Mensagem de confirmação</td>
            <td>Banco de dados de funcionários</td>
            <td>
                4. Localizar funcionário <br>
                5. Confirmar exclusão <br>
                6. Remover do banco <br>
            </td>
            <td>Funcionário deve estar cadastrado</td>
            <td>Funcionário removido do sistema.</td>
        </tr>
        <tr>
            <td>RF04 - Editar Funcionário</td>
            <td>Permite editar os dados de um funcionário.</td>
            <td>
                • idFuncionario (int) <br>
                • nome (varchar(50)) <br>
                • dados atualizados <br>
            </td>
            <td>Interface de edição de funcionário</td>
            <td>Mensagem de sucesso ou erro</td>
            <td>Banco de dados de funcionários</td>
            <td>
                7. Buscar funcionário <br>
                8. Aplicar alterações <br>
                9. Salvar no banco <br>
            </td>
            <td>Funcionário existente</td>
            <td>Informações atualizadas.</td>
        </tr>
        <tr>
            <td>RF05 - Consultar Funcionário</td>
            <td>Permite buscar dados de um funcionário pelo id ou nome.</td>
            <td>
                • idFuncionario (int) <br>
                • nome (varchar(50)) <br>
            </td>
            <td>Campo de busca de funcionário</td>
            <td>Dados do funcionário encontrado</td>
            <td>Interface de exibição de dados</td>
            <td>
                10. Buscar por Nome ou id do funcionário <br>
                11. Exibir resultado <br>
            </td>
            <td>Funcionário deve estar cadastrado.</td>
            <td>Funcionário visualizado.</td>
        </tr>
        <tr>
            <td>RF06 - Cadastrar Hóspede</td>
            <td>Permite o cadastro de um novo hóspede no sistema.</td>
            <td>
                • nome (varchar(50)) <br>
                • sobreNome (varchar(100)) <br>
                • cpf (varchar(14)) <br> 
                • telefone1 (varchar(14)) <br>
                • telefone2 (varchar(14)) <br>
                • endereço (varchar(200)) <br>
                • foto (varchar(100)) <br>
                • email (varchar(100)) <br>
            </td>
            <td>Formulário de cadastro de hóspede</td>
            <td>Mensagem de sucesso ou erro</td>
            <td>Banco de dados de hóspede</td>
            <td>
                12. Validar campos <br>
                13. Verificar CPF único <br>
                14. Salvar dados <br>
            </td>
            <td>Usuário autenticado como recepcionista.</td>
            <td>Hóspede cadastrado.</td>
        </tr>
        <tr>
            <td>RF07 - Excluir Hóspede</td>
            <td>Permite a exclusão de um hóspede cadastrado.</td>
            <td>
                • idHospede (int) <br>
                • nome (varchar(50)) <br>
            </td>
            <td> Interface de consulta de hóspedes</td>
            <td>Mensagem de confirmação</td>
            <td>Banco de dados de hóspedes</td>
            <td>
                15. Buscar hóspede <br>
                16. Confirmar exclusão <br>
                17. Remover hóspede <br>
            </td>
            <td>Hóspede cadastrado.</td>
            <td>Hóspede removido do sistema.</td>
        </tr>
        <tr>
            <td>RF08 - Editar Hóspede</td>
            <td>Permite editar os dados de um hóspede.</td>
            <td>
                • idHospede (int) <br>
                • nome (varchar(50)) <br>
                • dados atualizados <br>
                • idHospede (int) <br>
                • nome (varchar(50)) <br>
            </td>
            <td>Interface de edição de hóspede</td>
            <td>Mensagem de sucesso ou erro</td>
            <td>Banco de dados de hóspedes</td>
            <td>
                18. Buscar hóspede <br>
                19. Atualizar campos <br>
                20. Salvar alterações <br>
            </td>
            <td>Hóspede existente.</td>
            <td>Informações atualizadas.</td>
        </tr>
        <tr>
            <td>RF09 - Consultar Hóspede</td>
            <td>Permite buscar dados de um hóspede pelo id ou nome.</td>
            <td>
                • idHospede (int) <br>
                • nome (varchar(50)) <br>
            </td>
            <td>Campo de busca de hóspede</td>
            <td>Dados do hóspede</td>
            <td>Interface de exibição</td>
            <td>
                21. Buscar por Nome ou id <br>
                22. Exibir resultado <br>
            </td>
            <td>Hóspede cadastrado.</td>
            <td>Visualização completa do hóspede.</td>
        </tr>
        <tr>
            <td>RF10 - Cadastrar Quarto</td>
            <td>Permite cadastrar um novo quarto no sistema.</td>
            <td>
                • numero (int) <br>
                • quantidadeBanheiro (int) <br>
                • quantidadeCama (int) <br>
                • quantidadeTV (int) <br>
                • categoria (ENUM: "Solteiro","Duplo Solteiro","Quarto casal","Dormitorio","Apartamento") <br>
                • privilegios (SET: "Wifi Gratis", "Ar-Condicionado","Frigobar","Café da Manhã","Banheiro no Quarto","Ventilador","Garagem") <br>
                • descricao (varchar(255)) <br>
                • status (ENUM: "Livre","Ocupado","manuntenção") <br>
                • preco (decimal) <br>
                • status (varchar(20)) <br>
            </td>
            <td>Formulário de cadastro de quarto</td>
            <td>Mensagem de sucesso</td>
            <td>Banco de dados de quartos</td>
            <td>
                23. Preencher campos <br>
                24. Validar dados <br>
                25. Salvar no banco <br>
            </td>
            <td>Usuário autenticado.</td>
            <td>Quarto cadastrado.</td>
        </tr>
        <tr>
            <td>RF11 - Excluir Quarto</td>
            <td>Permite excluir um quarto do sistema.</td>
            <td>
                • numero (int) <br>
            </td>
            <td>Interface de listagem de quartos</td>
            <td>Mensagem de sucesso</td>
            <td>Banco de dados de quartos</td>
            <td>
                26. Verificar disponibilidade <br>
                27. Excluir quarto <br>
            </td>
            <td>Quarto sem reservas futuras.</td>
            <td>Quarto excluído com sucesso.</td>
        </tr>
        <tr>
            <td>RF12 - Editar Quarto</td>
            <td>Permite a edição de dados de um quarto.</td>
            <td>
                • numero (int) <br>
                • dados atualizados <br>
            </td>
            <td>Interface de edição de quarto</td>
            <td>Mensagem de sucesso</td>
            <td>Banco de dados de quartos</td>
            <td>
                28. Buscar quarto <br>
                29. Editar campos <br>
                30. Salvar alterações <br>
            </td>
            <td>Quarto existente.</td>
            <td>Dados atualizados com sucesso.</td>
        </tr>
        <tr>
            <td>RF13 - Consultar Quarto</td>
            <td>Permite a consulta dos dados de um quarto.</td>
            <td>
                • numero (int) <br>
            </td>
            <td>Campo de busca de quarto</td>
            <td>Informações do quarto</td>
            <td>Interface de visualização</td>
            <td>
                31. Buscar quarto <br>
                32. Exibir dados <br>
            </td>
            <td>Quarto deve existir.</td>
            <td>Visualização dos dados.</td>
        </tr>
        <tr>
            <td>RF14 - Cadastrar Reserva</td>
            <td>Permite registrar uma nova reserva.</td>
            <td>
                • cpfHospede (varchar(11)) <br>
                • numeroQuarto (int) <br>
                • dataEntrada (date) <br>
                • dataSaida (date) <br>
                • status("Confirmado","Cancelado") <br>
            </td>
            <td>Formulário de reserva</td>
            <td>Mensagem de confirmação</td>
            <td>Banco de reservas</td>
            <td>
                33. Preencher formulário <br>
                34. Validar disponibilidade <br>
                35. Salvar reserva <br>
            </td>
            <td>Hóspede e quarto cadastrados.</td>
            <td>Reserva criada.</td>
        </tr>
        <tr>
            <td>RF15 - Cancelar Reserva</td>
            <td>Permite o cancelamento de uma reserva.</td>
            <td>
                • idReserva (int) <br>
            </td>
            <td>Lista de reservas</td>
            <td>Mensagem de sucesso</td>
            <td>Banco de reservas</td>
            <td>
                36. Selecionar reserva <br>
                37. Confirmar cancelamento <br>
            </td>
            <td>Reserva ativa.</td>
            <td>Reserva cancelada.</td>
        </tr>
        <tr>
            <td>RF16 - Consultar Reserva</td>
            <td>Permite consultar detalhes de reservas.</td>
            <td>
                • idReserva (int) <br>
            </td>
            <td>Campo de busca de reservas</td>
            <td>Dados da reserva</td>
            <td>Interface de visualização</td>
            <td>
                38. Buscar por ID <br>
                39. Exibir dados <br>
            </td>
            <td>Reserva existente.</td>
            <td>Reserva visualizada.</td>
        </tr>
        <tr>
            <td>RF17 - Cadastrar Gasto</td>
            <td>Permite cadastrar os gastos extras dos hóspedes no hotel.</td>
            <td>
                • nome (varchar(100)) <br>
                • descricao (varchar(255)) <br>
                • preco (decimal) <br>
            </td>
            <td>Formulário de serviço</td>
            <td>Mensagem de sucesso</td>
            <td>Banco de dados de hóspedes</td>
            <td>
                40. Preencher campos <br>
                41. Salvar dados <br>
            </td>
            <td>Usuário autenticado.</td>
            <td>Serviço disponível.</td>
        </tr>
        <tr>
            <td>RF18 - Excluir Tarefa</td>
            <td>Permite excluir uma tarefa cadastrada.</td>
            <td>
                • idTarefa (int) <br>
            </td>
            <td>Lista de tarefas</td>
            <td>Mensagem de confirmação</td>
            <td>Banco de tarefas</td>
            <td>
                42. Selecionar tarefa <br>
                43. Excluir tarefa <br>
            </td>
            <td>Tarefa existente.</td>
            <td>Tarefa excluída.</td>
        </tr>
        <tr>
            <td>RF19 - Gerenciar Tarefa</td>
            <td>Permite alterar o status ou detalhes de uma tarefa.</td>
            <td>
                • idTarefa (int) <br>
                • novos dados <br>
            </td>
            <td>Interface de tarefas</td>
            <td>Mensagem de sucesso</td>
            <td>Banco de tarefas</td>
            <td>
                44. Buscar tarefa <br>
                45. Atualizar dados <br>
                46. Salvar mudanças <br>
            </td>
            <td>Tarefa existente.</td>
            <td>Status atualizado.</td>
        </tr>
        <tr>
            <td>RF20 - Gerenciar Check-in</td>
            <td>Permite verificar as informações do Hóspede para realizar o Check-in.</td>
            <td>
                • idHóspede (int) <br>
                • idQuarto (int) <br>
            </td>
            <td>Campo de busca</td>
            <td>Dados do Hóspede</td>
            <td>Interface de visualização</td>
            <td>
                47. Buscar por ID <br>
                48. Exibir dados <br>
            </td>
            <td>Hóspede existente.</td>
            <td>Dados exibidos.</td>
        </tr>
        <tr>
            <td>RF21 - Gerenciar Check-out</td>
            <td>Permite verificar as informações do Hóspede para realizar o Check-out.</td>
            <td>
                • idHospede (int) <br>
                • idQuarto (int) <br>
            </td>
            <td>Campo de busca</td>
            <td>Dados do Hóspede</td>
            <td>Interface de visualização</td>
            <td>
                49. Buscar por ID <br>
                50. Exibir dados <br>
            </td>
            <td>Hóspede existente.</td>
            <td>Dados exibidos.</td>
        </tr>
        <tr>
            <td>RF22 - Cadastrar Planos</td>
            <td>Permite o cadastro de um novo funcionário no sistema.</td>
            <td>
                • nome (varchar(50)) <br>
                • descricao (varchar(255)) <br>
                • preco (decimal) <br>
            </td>
            <td>Formulário de cadastro de planos</td>
            <td>Mensagem de sucesso ou erro</td>
            <td>Banco de dados de planos</td>
            <td>
                51. Validar campos obrigatórios <br>
                52. Salvar os dados no banco <br>
            </td>
            <td>Usuário deve estar autenticado como gerente.</td>
            <td>Plano cadastrado com sucesso.</td>
        </tr>
        <tr>
            <td>RF23 - Excluir Plano</td>
            <td>Permite a exclusão de um funcionário cadastrado.</td>
            <td>
                • idPlano (int) <br>
                • nome(varchar(50)) <br>
            </td>
            <td>Interface de consulta de planos</td>
            <td>Mensagem de confirmação</td>
            <td>Banco de dados de planos</td>
            <td>
                53. Localizar plano <br>
                54. Confirmar exclusão <br>
                55. Remover do banco <br>
            </td>
            <td>Plano deve estar cadastrado.</td>
            <td>Plano removido do sistema.</td>
        </tr>
        <tr>
            <td>RF24 - Editar Plano</td>
            <td>Permite editar os dados de um plano.</td>
            <td>
                • idPlano (int) <br>
                • nome (varchar(50)) <br>
                • dados atualizados <br>
            </td>
            <td>Interface de edição de plano</td>
            <td>Mensagem de sucesso ou erro</td>
            <td>Banco de dados de planos</td>
            <td>
                56. Buscar plano <br>
                57. Aplicar alterações <br>
                58. Salvar no banco <br>
            </td>
            <td>Plano existente.</td>
            <td>Informações atualizadas.</td>
        </tr>
        <tr>
            <td>RF25 - Consultar Plano</td>
            <td>Permite buscar dados de um plano pelo ID.</td>
            <td>
                • idPlano (int) <br>
            </td>
            <td>Campo de busca de plano</td>
            <td>Dados do plano encontrado</td>
            <td>Interface de exibição de dados</td>
            <td>
                1.Buscar por id do plano <br>
                2.Exibir resultado <br>
            </td>
            <td>Plano deve estar cadastrado.</td>
            <td>Plano visualizado.</td>
        </tr>
    </tbody>
</table>