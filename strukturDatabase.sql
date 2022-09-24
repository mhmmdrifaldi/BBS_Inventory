-- Struktur Database
create table jenis_barang(
  id_jebar serial primary key,
  nama_jebar varchar(25)
);

create table data_barang(
  id_dabar serial primary key,
  id_jebar integer not null,
  nama_barang varchar(50),
  stock integer,
  foreign key(id_jebar) references jenis_barang(id_jebar) on update cascade on delete cascade
);

create table nota(
  id_nota serial primary key,
  date_nota date
);

create table barang_masuk(
  id_barma serial,
  barma_id_nota integer not null,
  barma_id_dabar integer not null,
  stock integer,
  constraint pk_barang_masuk primary key(id_barma, barma_id_nota, barma_id_dabar),
  foreign key(barma_id_nota) references nota(id_nota) on update cascade on delete cascade,
  foreign key(barma_id_dabar) references data_barang(id_dabar) on update cascade on delete cascade
);

create table pembeli(
  id_user serial primary key,
  nama_user varchar(30),
  alamat varchar(50),
  status varchar(20),
  date_pembelian date
);

create table barang_keluar(
  id_barkel serial,
  barkel_id_user integer not null,
  barkel_id_dabar integer not null,
  stock integer,
  constraint pk_barang_keluar primary key(id_barkel, barkel_id_user, barkel_id_dabar),
  foreign key(barkel_id_user) references pembeli(id_user) on update cascade on delete cascade,
  foreign key(barkel_id_dabar) references data_barang(id_dabar) on update cascade on delete cascade
);