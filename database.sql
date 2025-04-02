create database if not exists `hotel_management`;
use `hotel_management`;

create table workgroups (
    `id`                    int not null primary key auto_increment,
    `name`                  varchar(50) not null,
    `created_at`            datetime not null default current_timestamp,
    `updated_at`            datetime not null default current_timestamp on update current_timestamp
);

create table workgroup_permissions (
    `id`                    int not null primary key auto_increment,
    `id_workgroup`          varchar(50) not null,
    `created_at`            datetime not null default current_timestamp,
    `updated_at`            datetime not null default current_timestamp on update current_timestamp

    foreign key(`id_workgroup`) references workgroups(`id`)
);

create table employees (
    `id`                    int not null primary key auto_increment,
    `id_workgroup`          int not null,
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
    `updated_at`            datetime not null default current_timestamp on update current_timestamp,

    foreign key(`id_workgroup`) references workgroups (id)
);

create table plans (
    `id`                    int not null primary key auto_increment,
    `title`                 varchar(50) not null,
    `description`           varchar(255) not null,
    `price`                 decimal(10,2) not null,
    `created_at`            datetime not null default current_timestamp,
    `updated_at`            datetime not null default current_timestamp on update current_timestamp
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

create table guest_consumptions (
    `id`                    int not null primary key auto_increment,
    `id_guest`              int not null,
    `price`                 decimal(10,2) not null,
    `created_at`            datetime not null default current_timestamp,
    
    foreign key(`id_guest`) references guests (`id`)
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

create table tasks (
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

create table meetings (
    `id`                    int not null primary key auto_increment,
    `id_employee`           int not null, -- Quem criou a reunião
    `title`                 varchar(50) not null,
    `link`                  varchar(100) not null,
    `meeting_start_date`    datetime not null,
    `meeting_finish_date`   datetime not null,
    `created_at`            datetime not null default current_timestamp,
    `updated_at`            datetime not null default current_timestamp on update current_timestamp,

    foreign key (`id_employee`) references employees (`id`)
);


create table email_log (
    `id`                    int not null primary key auto_increment,
    `id_employee`           int not null,
    `id_guest`              int not null,
    `title`                 varchar(50) not null
    `message`               text not null,
    `created_at`            datetime not null default current_timestamp,

    foreign key(`id_employee`) references employees (`id`),
    foreign key(`id_guest`) references guests (`id`),
);

create table logs (
    `id`                    int not null primary key auto_increment,
    `id_employee`           int not null,
    `error_code`            varchar(10) not null,
    `message`               TEXT not null,
    `ip`                    varchar(12) not null,
    `created_at`            datetime not null default current_timestamp
);