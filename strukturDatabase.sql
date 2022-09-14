-- Struktur Database
create table jenis_barang(
  id_jebar serial primary key,
  nama_jebar varchar(25)
);

create table barang(
  id_barang serial primary key,
  nama_barang varchar(50),
  id_jebar integer not null,
  foreign key(id_jebar) references jenis_barang(id_jebar) on update cascade on delete cascade
);

create table barang_masuk(
  id_barma serial primary key,
  id_barang integer not null,
  nama_barang varchar(50),
  stock integer,
  date_barma date,
  foreign key(id_barang) references barang(id_barang) on update cascade on delete cascade
);

create table data_barang(
  id_dabar serial primary key,
  id_barang integer not null,
  nama_barang varchar(50),
  jenis_barang varchar(15),
  stock integer,
  foreign key(id_barang) references barang(id_barang) on update cascade on delete cascade
);

create table barang_keluar(
  id_barkel serial primary key,
  id_dabar integer not null,
  nama_barang varchar(50),
  jenis_barang varchar(15),
  stock integer,
  date_barkel date,
  status varchar(20),
  foreign key(id_dabar) references data_barang(id_dabar) on update cascade on delete cascade
);