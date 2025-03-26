create database if not exists `hotel_management`;
use `hotel_management`;

create table employees (
    `id`                    int not null primary key auto_increment,
    `name`                  varchar(50) not null,
    `last_name`             varchar(100) not null,
    `document`              varchar(14) not null,
    `birthday`              DATE not null,
    `phone1`                varchar(14) not null,
    `phone2`                varchar(14) not null,
    `address`               varchar(200) not null,
    `photo`                 varchar(100) not null,
    `login`                 varchar(50) not null,
    `email`                 varchar(100) not null,
    `password`              varchar(255) not null,
    `created_at`            datetime not null default current_timestamp,
    `updated_at`            datetime not null default current_timestamp on update current_timestamp
);

create table plans (
    `id`                    int not null primary key auto_increment,
    `title`                 varchar(50) not null,
    `description`           varchar(255) not null,
    `price`                 decimal(10,2) not null
);

create table guests (
    `id`                    int not null primary key auto_increment,
    `id_plan`               int not null,
    `name`                  varchar(50) not null,
    `last_name`             varchar(100) not null,
    `document`              varchar(14) not null,
    `birthday`              DATE not null,
    `phone1`                varchar(14) not null,
    `phone2`                varchar(14) not null,
    `address`               varchar(200) not null,
    `photo`                 varchar(100) not null,
    `created_at`            datetime not null default current_timestamp,
    `updated_at`            datetime not null default current_timestamp on update current_timestamp,

    foreign key(`id_plan`) references plans(`id`)
);

create table bedrooms (
    `id`                    int not null primary key auto_increment,
    `number`                int(20) not null,
    `bathroom_quantity`     int(10) not null,
    `bed_quantity`          int(10) not null,
    `tv_quantity`           int(10) not null,
    `category`              enum('Solteiro', 'Duplo solteiro', 'Quarto casal', 'Dormitório', 'Apartamento') not null default 'Solteiro',
    `classification`        enum('Standard', 'Master', 'Deluxe') not null default 'Standard',
    `privileges`            set('free_wifi', 'air_conditioner', 'frigobar', 'breakfast', 'bathroom_in_bedroom', 'fan', 'garage') default null,
    `short_description`     varchar(200) not null,
    `status`                enum('Livre', 'Ocupado', 'Manutenção') default 'Livre',
    `photo`                 varchar(100) not null,
    `created_at`            datetime not null default current_timestamp,
    `updated_at`            datetime not null default current_timestamp on update current_timestamp
);

create table reservations (
    `id`                    int not null primary key auto_increment,
    `id_guest`              int not null,
    `id_bedroom`            int not null,
    `check_in`              DATE not null,
    `check_out`             DATE not null,
    `status`                enum('Reservado', 'Confirmado', 'Cancelado') not null default 'Reservado',
    `created_at`            datetime not null default current_timestamp,
    `antecipated_payment`   enum('T', 'F') default null,

    foreign key(`id_guest`) references guests(id),
    foreign key(`id_bedroom`) references bedrooms(id)
);

create table invoices (
    `id`                    int not null primary key auto_increment,
    `id_guest`              int not null,
    `total_amount`          decimal(10,2) not null,
    `due_date`              date not null,
    `status`                enum('Pendente', 'Pago', 'Cancelado') not null default 'Pendente',
    `created_at`            datetime not null default current_timestamp,

    foreign key(`id_guest`) references guests(id)
);

create table payments (
    `id`                    int not null primary key auto_increment,
    `id_invoice`            int not null,
    `payment_date`          datetime not null default current_timestamp,
    `payment_method`        enum('Cartão', 'Dinheiro', 'Transferência') not null,
    `amount_paid`           decimal(10,2) not null,
    
    foreign key(`id_invoice`) references invoices(id)
);

create table tasks(
    `id`                    int not null primary key auto_increment,
    `id_employee`           int not null,
    `id_reservation`        int not null,
    `priority`              enum('Baixa', 'Normal', 'Alta', 'Urgente') not null default 'Baixa',
    `description`           varchar(255) not null,
    `price`                 decimal(10,2) not null,
    `status`                enum('Pendente', 'Em andamento', 'Finalizado') not null default 'Pendente',
    `created_at`            datetime not null default current_timestamp,
    `updated_at`            datetime not null default current_timestamp on update current_timestamp,

    foreign key(`id_employee`) references employees (id),
    foreign key(`id_reservation`) references reservations (id)
);

create table reports (
    `id`                    int not null primary key auto_increment,
    `type`                  varchar(50) not null,  -- Tipo de relatório
    `content`               text not null,
    `created_at`            datetime not null default current_timestamp
);

create table logs(
    `id`                    int not null primary key auto_increment,
    `id_employee`           int not null,
    `error_code`            varchar(10) not null,
    `message`               TEXT not null,
    `ip`                    varchar(12) not null,
    `created_at`            datetime not null default current_timestamp
);