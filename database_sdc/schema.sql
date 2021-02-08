DROP TABLE featuredProducts IF EXISTS;
CREATE TABLE featuredProducts (
	productId SERIAL NOT NULL PRIMARY KEY,
	name varchar(24) NOT NULL,
	brand varchar(24) NOT NULL,
	department varchar(24) NOT NULL,
	rating Numeric NOT NULL,
	ratingCount INT NOT NULL,
	price numeric(10,2) NOT NULL,
	shade varchar(24) NOT NULL,
	img varchar(200) NOT NULL,
	description varchar(300),
	features varchar(500)[],
	bestUse varchar(24),
	materials varchar(24),
	dimensions INT[],
	weight INT[]
);

COPY featuredproducts FROM '/Users/seanhchen98/Code/hackReactor/hrsjo3/sdc/Featured_Product/database_sdc/data1.csv' DELIMITER '|' CSV HEADER;