create database if not exists `hotel_management`;
use `hotel_management`;

create table workgroups (
    `id`                    int not null primary key auto_increment COMMENT "Identificador do grupo de trabalho",
    `name`                  varchar(50) not null COMMENT "Nome do grupo de trabalho",
    `created_at`            datetime not null default current_timestamp COMMENT "Data da criação",
    `updated_at`            datetime not null default current_timestamp on update current_timestamp COMMENT "Data da atualização"
);

create table employees (
    `id`                    int not null primary key auto_increment COMMENT "Identificador do funcionário",
    `id_workgroup`          int not null COMMENT "Identificador do grupo de trabalho",
    `name`                  varchar(50) not null COMMENT "Nome do funcionário",
    `last_name`             varchar(100) not null COMMENT "Sobrenome do funcionário",
    `document`              varchar(14) not null COMMENT "Documento do funcionário - CPF",
    `birthday`              DATE not null COMMENT "Data de nascimento do funcionário",
    `phone1`                varchar(14) not null COMMENT "Telefone 1 do funcionário",
    `phone2`                varchar(14) not null COMMENT "Telefone 2 do funcionário",
    `address`               varchar(200) not null COMMENT "Endereço do funcionário",
    `photo`                 varchar(100) not null COMMENT "Foto do funcionário",
    `login`                 varchar(50) not null COMMENT "Login do funcionário",
    `email`                 varchar(100) not null COMMENT "Email do funcionário",
    `password`              varchar(255) not null COMMENT "Hash da senha do funcionário",
    `created_at`            datetime not null default current_timestamp COMMENT "Data da criação",
    `updated_at`            datetime not null default current_timestamp on update current_timestamp COMMENT "Data da atualização",

    foreign key(`id_workgroup`) references workgroups (`id`)
);

create table plans (
    `id`                    int not null primary key auto_increment COMMENT "Identificador do plano",
    `title`                 varchar(50) not null COMMENT "Título do plano",
    `description`           varchar(255) not null COMMENT "Descrição do plano",
    `price`                 decimal(10,2) not null COMMENT "Preço do plano",
    `created_at`            datetime not null default current_timestamp COMMENT "Data da criação",
    `updated_at`            datetime not null default current_timestamp on update current_timestamp COMMENT "Data da atualização"
);

create table guests (
    `id`                    int not null primary key auto_increment COMMENT "Identificador do hóspede",
    `id_plan`               int not null COMMENT "Identificador do plano do hóspede",
    `name`                  varchar(50) not null COMMENT "Nome do hóspede",
    `last_name`             varchar(100) not null COMMENT "Sobrenome do hóspede",
    `document`              varchar(14) not null COMMENT "Documento do funcionário - CPF",
    `birthday`              DATE not null COMMENT "Data de nascimento do funcionário",
    `phone1`                varchar(14) not null COMMENT "Telefone 1 do funcionário",
    `phone2`                varchar(14) not null COMMENT "Telefone 2 do funcionário",
    `address`               varchar(200) not null COMMENT "Endereço do funcionário",
    `photo`                 varchar(100) not null COMMENT "Foto do funcionário",
    `created_at`            datetime not null default current_timestamp COMMENT "Data da criação",
    `updated_at`            datetime not null default current_timestamp on update current_timestamp COMMENT "Data da atualização",

    foreign key(`id_plan`) references plans(`id`)
);

create table guest_consumptions (
    `id`                    int not null primary key auto_increment COMMENT "Identificador do consumo",
    `id_guest`              int not null COMMENT "Identificador do hóspede",
    `price`                 decimal(10,2) not null COMMENT "Preço do consumo",
    `created_at`            datetime not null default current_timestamp COMMENT "Data da criação",
    
    foreign key(`id_guest`) references guests (`id`)
);

create table bedrooms (
    `id`                    int not null primary key auto_increment COMMENT "Identificador do quarto",
    `number`                int(20) not null COMMENT "Número do quarto",
    `bathroom_quantity`     int(10) not null COMMENT "Quantidade de banheiros no quarto",
    `bed_quantity`          int(10) not null COMMENT "Quantidade de camas no quarto",
    `tv_quantity`           int(10) not null COMMENT "Quantidade de TV's no quarto",
    `category`              enum('Solteiro', 'Duplo solteiro', 'Quarto casal', 'Dormitório', 'Apartamento') not null default 'Solteiro' COMMENT "Categoria do quarto",
    `classification`        enum('Standard', 'Master', 'Deluxe') not null default 'Standard' COMMENT "Classificação do quarto",
    `privileges`            set('free_wifi', 'air_conditioner', 'frigobar', 'breakfast', 'bathroom_in_bedroom', 'fan', 'garage') default null COMMENT "Privilegios do quarto",
    `short_description`     varchar(200) not null COMMENT "Descrição curta sobre o quarto",
    `status`                enum('Livre', 'Ocupado', 'Manutenção') not null default 'Livre' COMMENT "Estado do quarto",
    `photo`                 varchar(100) not null COMMENT "Foto do quarto",
    `created_at`            datetime not null default current_timestamp COMMENT "Data da criação",
    `updated_at`            datetime not null default current_timestamp on update current_timestamp COMMENT "Data da atualização"
);

create table reservations (
    `id`                    int not null primary key auto_increment COMMENT "Identificador da reserva",
    `id_guest`              int not null COMMENT "Identificador do hóspede",
    `id_bedroom`            int not null COMMENT "Identificador do quarto",
    `check_in`              DATE not null COMMENT "Data do Check-in",
    `check_out`             DATE not null COMMENT "Data do Check-out",
    `status`                enum('Reservado', 'Confirmado', 'Cancelado') not null default 'Reservado' COMMENT "Estado da reserva",
    `created_at`            datetime not null default current_timestamp COMMENT "Data da criação",
    `antecipated_payment`   enum('T', 'F') default null COMMENT "Pagamento antecipado",

    foreign key(`id_guest`) references guests(id),
    foreign key(`id_bedroom`) references bedrooms(id)
);

create table tasks (
    `id`                    int not null primary key auto_increment COMMENT "Identificador da tarefa",
    `id_employee`           int not null COMMENT "Identificador do funcionário",
    `id_reservation`        int not null COMMENT "Identificador da reserva",
    `priority`              enum('Baixa', 'Normal', 'Alta', 'Urgente') not null default 'Baixa' COMMENT "Prioridade da reserva",
    `description`           varchar(255) not null COMMENT "Descrição da tarefa",
    `price`                 decimal(10,2) not null COMMENT "Preço que a tarefa custa",
    `status`                enum('Pendente', 'Em andamento', 'Finalizado') not null default 'Pendente' COMMENT "Estado da tarefa",
    `created_at`            datetime not null default current_timestamp COMMENT "Data da criação",
    `updated_at`            datetime not null default current_timestamp on update current_timestamp COMMENT "Data da atualização",

    foreign key(`id_employee`) references employees (id),
    foreign key(`id_reservation`) references reservations (id)
);

create table logs (
    `id`                    int not null primary key auto_increment COMMENT "Identificador do LOG",
    `id_employee`           int not null COMMENT "Identificador do funcionário",
    `error_code`            varchar(10) not null COMMENT "Código de erro",
    `message`               TEXT not null COMMENT "Mensagem de LOG",
    `ip`                    varchar(12) not null COMMENT "IP da máquina que registrou o LOG",
    `created_at`            datetime not null default current_timestamp COMMENT "Data da criação"
);