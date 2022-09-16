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

create table barang_masuk(
  id_barma serial,
  barma_id_dabar integer not null,
  stock integer,
  date_barma date,
  constraint pk_barang_masuk primary key(id_barma, barma_id_dabar),
  foreign key(barma_id_dabar) references data_barang(id_dabar) on update cascade on delete cascade
);

create table barang_keluar(
  id_barkel serial,
  barkel_id_dabar integer not null,
  stock integer,
  date_barkel date,
  status varchar(20),
  constraint pk_barang_keluar primary key(id_barkel, barkel_id_dabar),
  foreign key(barkel_id_dabar) references data_barang(id_dabar) on update cascade on delete cascade
);