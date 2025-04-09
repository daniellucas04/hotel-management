# Dicionário de dados

<table border=1>
    <tbody>
        <tr>
            <td>Nome da tabela</td>
            <td>Tipo do objeto</td>
            <td>Ordem</td>
            <td>Tipo de chave</td>
            <td>Nome da coluna</td>
            <td>Tipo de dados</td>
            <td>Nulo</td>
            <td>Descrição</td>
        </tr>
        <tr>
            <td>bedrooms</td>
            <td>TBL</td>
            <td>1</td>
            <td>PK</td>
            <td>id</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do quarto</td>
        </tr>
        <tr>
            <td>bedrooms</td>
            <td>TBL</td>
            <td>2</td>
            <td>&nbsp;</td>
            <td>number</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Número do quarto</td>
        </tr>
        <tr>
            <td>bedrooms</td>
            <td>TBL</td>
            <td>3</td>
            <td>&nbsp;</td>
            <td>bathroom_quantity</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Quantidade de banheiros no quarto</td>
        </tr>
        <tr>
            <td>bedrooms</td>
            <td>TBL</td>
            <td>4</td>
            <td>&nbsp;</td>
            <td>bed_quantity</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Quantidade de camas no quarto</td>
        </tr>
        <tr>
            <td>bedrooms</td>
            <td>TBL</td>
            <td>5</td>
            <td>&nbsp;</td>
            <td>tv_quantity</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Quantidade de TV's no quarto</td>
        </tr>
        <tr>
            <td>bedrooms</td>
            <td>TBL</td>
            <td>6</td>
            <td>&nbsp;</td>
            <td>category</td>
            <td>enum(14)</td>
            <td>NOT NULL</td>
            <td>Categoria do quarto</td>
        </tr>
        <tr>
            <td>bedrooms</td>
            <td>TBL</td>
            <td>7</td>
            <td>&nbsp;</td>
            <td>status</td>
            <td>enum(8)</td>
            <td>NOT NULL</td>
            <td>Estado do quarto</td>
        </tr>
        <tr>
            <td>bedrooms</td>
            <td>TBL</td>
            <td>8</td>
            <td>&nbsp;</td>
            <td>privileges</td>
            <td>set(75)</td>
            <td>NULL</td>
            <td>Privilegios do quarto</td>
        </tr>
        <tr>
            <td>bedrooms</td>
            <td>TBL</td>
            <td>9</td>
            <td>&nbsp;</td>
            <td>short_description</td>
            <td>varchar(200)</td>
            <td>NOT NULL</td>
            <td>Descrição curta sobre o quarto</td>
        </tr>
        <tr>
            <td>bedrooms</td>
            <td>TBL</td>
            <td>10</td>
            <td>&nbsp;</td>
            <td>status</td>
            <td>enum(10)</td>
            <td>NULL</td>
            <td>Estado do quarto</td>
        </tr>
        <tr>
            <td>bedrooms</td>
            <td>TBL</td>
            <td>11</td>
            <td>&nbsp;</td>
            <td>photo</td>
            <td>varchar(100)</td>
            <td>NOT NULL</td>
            <td>Foto do quarto</td>
        </tr>
        <tr>
            <td>bedrooms</td>
            <td>TBL</td>
            <td>12</td>
            <td>&nbsp;</td>
            <td>created_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da criação</td>
        </tr>
        <tr>
            <td>bedrooms</td>
            <td>TBL</td>
            <td>13</td>
            <td>&nbsp;</td>
            <td>updated_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da atualização</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>1</td>
            <td>PK</td>
            <td>id</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do funcionário</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>2</td>
            <td>FK</td>
            <td>id_workgroup</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do grupo de trabalho</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>3</td>
            <td>&nbsp;</td>
            <td>name</td>
            <td>varchar(50)</td>
            <td>NOT NULL</td>
            <td>Nome do funcionário</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>4</td>
            <td>&nbsp;</td>
            <td>last_name</td>
            <td>varchar(100)</td>
            <td>NOT NULL</td>
            <td>Sobrenome do funcionário</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>5</td>
            <td>&nbsp;</td>
            <td>document</td>
            <td>varchar(14)</td>
            <td>NOT NULL</td>
            <td>Documento do funcionário - CPF</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>6</td>
            <td>&nbsp;</td>
            <td>birthday</td>
            <td>date(3)</td>
            <td>NOT NULL</td>
            <td>Data de nascimento do funcionário</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>7</td>
            <td>&nbsp;</td>
            <td>phone1</td>
            <td>varchar(14)</td>
            <td>NOT NULL</td>
            <td>Telefone 1 do funcionário</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>8</td>
            <td>&nbsp;</td>
            <td>phone2</td>
            <td>varchar(14)</td>
            <td>NOT NULL</td>
            <td>Telefone 2 do funcionário</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>9</td>
            <td>&nbsp;</td>
            <td>address</td>
            <td>varchar(200)</td>
            <td>NOT NULL</td>
            <td>Endereço do funcionário</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>10</td>
            <td>&nbsp;</td>
            <td>photo</td>
            <td>varchar(100)</td>
            <td>NOT NULL</td>
            <td>Foto do funcionário</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>11</td>
            <td>&nbsp;</td>
            <td>login</td>
            <td>varchar(50)</td>
            <td>NOT NULL</td>
            <td>Login do funcionário</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>12</td>
            <td>&nbsp;</td>
            <td>email</td>
            <td>varchar(100)</td>
            <td>NOT NULL</td>
            <td>Email do funcionário</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>13</td>
            <td>&nbsp;</td>
            <td>password</td>
            <td>varchar(255)</td>
            <td>NOT NULL</td>
            <td>Hash da senha do funcionário</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>14</td>
            <td>&nbsp;</td>
            <td>created_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da criação</td>
        </tr>
        <tr>
            <td>employees</td>
            <td>TBL</td>
            <td>15</td>
            <td>&nbsp;</td>
            <td>updated_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da atualização</td>
        </tr>
        <tr>
            <td>guests</td>
            <td>TBL</td>
            <td>1</td>
            <td>PK</td>
            <td>id</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do hóspede</td>
        </tr>
        <tr>
            <td>guests</td>
            <td>TBL</td>
            <td>2</td>
            <td>FK</td>
            <td>id_plan</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do plano do hóspede</td>
        </tr>
        <tr>
            <td>guests</td>
            <td>TBL</td>
            <td>3</td>
            <td>&nbsp;</td>
            <td>name</td>
            <td>varchar(50)</td>
            <td>NOT NULL</td>
            <td>Nome do hóspede</td>
        </tr>
        <tr>
            <td>guests</td>
            <td>TBL</td>
            <td>4</td>
            <td>&nbsp;</td>
            <td>last_name</td>
            <td>varchar(100)</td>
            <td>NOT NULL</td>
            <td>Sobrenome do hóspede</td>
        </tr>
        <tr>
            <td>guests</td>
            <td>TBL</td>
            <td>5</td>
            <td>&nbsp;</td>
            <td>document</td>
            <td>varchar(14)</td>
            <td>NOT NULL</td>
            <td>Documento do funcionário - CPF</td>
        </tr>
        <tr>
            <td>guests</td>
            <td>TBL</td>
            <td>6</td>
            <td>&nbsp;</td>
            <td>birthday</td>
            <td>date(3)</td>
            <td>NOT NULL</td>
            <td>Data de nascimento do funcionário</td>
        </tr>
        <tr>
            <td>guests</td>
            <td>TBL</td>
            <td>7</td>
            <td>&nbsp;</td>
            <td>phone1</td>
            <td>varchar(14)</td>
            <td>NOT NULL</td>
            <td>Telefone 1 do funcionário</td>
        </tr>
        <tr>
            <td>guests</td>
            <td>TBL</td>
            <td>8</td>
            <td>&nbsp;</td>
            <td>phone2</td>
            <td>varchar(14)</td>
            <td>NOT NULL</td>
            <td>Telefone 2 do funcionário</td>
        </tr>
        <tr>
            <td>guests</td>
            <td>TBL</td>
            <td>9</td>
            <td>&nbsp;</td>
            <td>address</td>
            <td>varchar(200)</td>
            <td>NOT NULL</td>
            <td>Endereço do funcionário</td>
        </tr>
        <tr>
            <td>guests</td>
            <td>TBL</td>
            <td>10</td>
            <td>&nbsp;</td>
            <td>photo</td>
            <td>varchar(100)</td>
            <td>NOT NULL</td>
            <td>Foto do funcionário</td>
        </tr>
        <tr>
            <td>guests</td>
            <td>TBL</td>
            <td>11</td>
            <td>&nbsp;</td>
            <td>created_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da criação</td>
        </tr>
        <tr>
            <td>guests</td>
            <td>TBL</td>
            <td>12</td>
            <td>&nbsp;</td>
            <td>updated_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da atualização</td>
        </tr>
        <tr>
            <td>guest_consumptions</td>
            <td>TBL</td>
            <td>1</td>
            <td>PK</td>
            <td>id</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do consumo</td>
        </tr>
        <tr>
            <td>guest_consumptions</td>
            <td>TBL</td>
            <td>2</td>
            <td>FK</td>
            <td>id_guest</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do hóspede</td>
        </tr>
        <tr>
            <td>guest_consumptions</td>
            <td>TBL</td>
            <td>3</td>
            <td>&nbsp;</td>
            <td>price</td>
            <td>decimal(10,2)</td>
            <td>NOT NULL</td>
            <td>Preço do consumo</td>
        </tr>
        <tr>
            <td>guest_consumptions</td>
            <td>TBL</td>
            <td>4</td>
            <td>&nbsp;</td>
            <td>created_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da criação</td>
        </tr>
        <tr>
            <td>logs</td>
            <td>TBL</td>
            <td>1</td>
            <td>PK</td>
            <td>id</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do LOG</td>
        </tr>
        <tr>
            <td>logs</td>
            <td>TBL</td>
            <td>2</td>
            <td>&nbsp;</td>
            <td>id_employee</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do funcionário</td>
        </tr>
        <tr>
            <td>logs</td>
            <td>TBL</td>
            <td>3</td>
            <td>&nbsp;</td>
            <td>error_code</td>
            <td>varchar(10)</td>
            <td>NOT NULL</td>
            <td>Código de erro</td>
        </tr>
        <tr>
            <td>logs</td>
            <td>TBL</td>
            <td>4</td>
            <td>&nbsp;</td>
            <td>message</td>
            <td>text(65535)</td>
            <td>NOT NULL</td>
            <td>Mensagem de LOG</td>
        </tr>
        <tr>
            <td>logs</td>
            <td>TBL</td>
            <td>5</td>
            <td>&nbsp;</td>
            <td>ip</td>
            <td>varchar(12)</td>
            <td>NOT NULL</td>
            <td>IP da máquina que registrou o LOG</td>
        </tr>
        <tr>
            <td>logs</td>
            <td>TBL</td>
            <td>6</td>
            <td>&nbsp;</td>
            <td>created_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da criação</td>
        </tr>
        <tr>
            <td>plans</td>
            <td>TBL</td>
            <td>1</td>
            <td>PK</td>
            <td>id</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do plano</td>
        </tr>
        <tr>
            <td>plans</td>
            <td>TBL</td>
            <td>2</td>
            <td>&nbsp;</td>
            <td>title</td>
            <td>varchar(50)</td>
            <td>NOT NULL</td>
            <td>Título do plano</td>
        </tr>
        <tr>
            <td>plans</td>
            <td>TBL</td>
            <td>3</td>
            <td>&nbsp;</td>
            <td>description</td>
            <td>varchar(255)</td>
            <td>NOT NULL</td>
            <td>Descrição do plano</td>
        </tr>
        <tr>
            <td>plans</td>
            <td>TBL</td>
            <td>4</td>
            <td>&nbsp;</td>
            <td>price</td>
            <td>decimal(10,2)</td>
            <td>NOT NULL</td>
            <td>Preço do plano</td>
        </tr>
        <tr>
            <td>plans</td>
            <td>TBL</td>
            <td>5</td>
            <td>&nbsp;</td>
            <td>created_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da criação</td>
        </tr>
        <tr>
            <td>plans</td>
            <td>TBL</td>
            <td>6</td>
            <td>&nbsp;</td>
            <td>updated_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da atualização</td>
        </tr>
        <tr>
            <td>reservations</td>
            <td>TBL</td>
            <td>1</td>
            <td>PK</td>
            <td>id</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador da reserva</td>
        </tr>
        <tr>
            <td>reservations</td>
            <td>TBL</td>
            <td>2</td>
            <td>FK</td>
            <td>id_guest</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do hóspede</td>
        </tr>
        <tr>
            <td>reservations</td>
            <td>TBL</td>
            <td>3</td>
            <td>FK</td>
            <td>id_bedroom</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do quarto</td>
        </tr>
        <tr>
            <td>reservations</td>
            <td>TBL</td>
            <td>4</td>
            <td>&nbsp;</td>
            <td>check_in</td>
            <td>date(3)</td>
            <td>NOT NULL</td>
            <td>Data do Check-in</td>
        </tr>
        <tr>
            <td>reservations</td>
            <td>TBL</td>
            <td>5</td>
            <td>&nbsp;</td>
            <td>check_out</td>
            <td>date(3)</td>
            <td>NOT NULL</td>
            <td>Data do Check-out</td>
        </tr>
        <tr>
            <td>reservations</td>
            <td>TBL</td>
            <td>6</td>
            <td>&nbsp;</td>
            <td>status</td>
            <td>enum(10)</td>
            <td>NOT NULL</td>
            <td>Estado da reserva</td>
        </tr>
        <tr>
            <td>reservations</td>
            <td>TBL</td>
            <td>7</td>
            <td>&nbsp;</td>
            <td>created_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da criação</td>
        </tr>
        <tr>
            <td>reservations</td>
            <td>TBL</td>
            <td>8</td>
            <td>&nbsp;</td>
            <td>antecipated_payment</td>
            <td>enum(1)</td>
            <td>NULL</td>
            <td>Pagamento antecipado</td>
        </tr>
        <tr>
            <td>tasks</td>
            <td>TBL</td>
            <td>1</td>
            <td>PK</td>
            <td>id</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador da tarefa</td>
        </tr>
        <tr>
            <td>tasks</td>
            <td>TBL</td>
            <td>2</td>
            <td>FK</td>
            <td>id_employee</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do funcionário</td>
        </tr>
        <tr>
            <td>tasks</td>
            <td>TBL</td>
            <td>3</td>
            <td>FK</td>
            <td>id_reservation</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador da reserva</td>
        </tr>
        <tr>
            <td>tasks</td>
            <td>TBL</td>
            <td>4</td>
            <td>&nbsp;</td>
            <td>priority</td>
            <td>enum(7)</td>
            <td>NOT NULL</td>
            <td>Prioridade da reserva</td>
        </tr>
        <tr>
            <td>tasks</td>
            <td>TBL</td>
            <td>5</td>
            <td>&nbsp;</td>
            <td>description</td>
            <td>varchar(255)</td>
            <td>NOT NULL</td>
            <td>Descrição da tarefa</td>
        </tr>
        <tr>
            <td>tasks</td>
            <td>TBL</td>
            <td>6</td>
            <td>&nbsp;</td>
            <td>price</td>
            <td>decimal(10,2)</td>
            <td>NOT NULL</td>
            <td>Preço que a tarefa custa</td>
        </tr>
        <tr>
            <td>tasks</td>
            <td>TBL</td>
            <td>7</td>
            <td>&nbsp;</td>
            <td>status</td>
            <td>enum(12)</td>
            <td>NOT NULL</td>
            <td>Estado da tarefa</td>
        </tr>
        <tr>
            <td>tasks</td>
            <td>TBL</td>
            <td>8</td>
            <td>&nbsp;</td>
            <td>created_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da criação</td>
        </tr>
        <tr>
            <td>tasks</td>
            <td>TBL</td>
            <td>9</td>
            <td>&nbsp;</td>
            <td>updated_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da atualização</td>
        </tr>
        <tr>
            <td>workgroups</td>
            <td>TBL</td>
            <td>1</td>
            <td>PK</td>
            <td>id</td>
            <td>int(10)</td>
            <td>NOT NULL</td>
            <td>Identificador do grupo de trabalho</td>
        </tr>
        <tr>
            <td>workgroups</td>
            <td>TBL</td>
            <td>2</td>
            <td>&nbsp;</td>
            <td>name</td>
            <td>varchar(50)</td>
            <td>NOT NULL</td>
            <td>Nome do grupo de trabalho</td>
        </tr>
        <tr>
            <td>workgroups</td>
            <td>TBL</td>
            <td>3</td>
            <td>&nbsp;</td>
            <td>created_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da criação</td>
        </tr>
        <tr>
            <td>workgroups</td>
            <td>TBL</td>
            <td>4</td>
            <td>&nbsp;</td>
            <td>updated_at</td>
            <td>datetime(8)</td>
            <td>NOT NULL</td>
            <td>Data da atualização</td>
        </tr>
    </tbody>
</table>
