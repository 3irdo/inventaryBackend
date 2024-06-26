USE [master]
GO
/****** Object:  Database [sortDB]    Script Date: 17/05/2024 12:41:07 a. m. ******/
CREATE DATABASE [sortDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'sortDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\sortDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'sortDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\sortDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [sortDB] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [sortDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [sortDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [sortDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [sortDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [sortDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [sortDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [sortDB] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [sortDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [sortDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [sortDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [sortDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [sortDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [sortDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [sortDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [sortDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [sortDB] SET  ENABLE_BROKER 
GO
ALTER DATABASE [sortDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [sortDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [sortDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [sortDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [sortDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [sortDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [sortDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [sortDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [sortDB] SET  MULTI_USER 
GO
ALTER DATABASE [sortDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [sortDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [sortDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [sortDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [sortDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [sortDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [sortDB] SET QUERY_STORE = ON
GO
ALTER DATABASE [sortDB] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [sortDB]
GO
/****** Object:  Table [dbo].[Clientes]    Script Date: 17/05/2024 12:41:07 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Clientes](
	[Pk_Numero_Cuenta_Cliente] [int] NOT NULL,
	[Nombre_Cliente] [nvarchar](50) NULL,
	[Apellido_Cliente] [nvarchar](50) NULL,
	[Cedula_Cliente] [int] NULL,
	[Telefono_Cliente] [nvarchar](30) NULL,
	[Facultad] [nvarchar](50) NULL,
	[Bloque] [nvarchar](20) NULL,
	[Aula] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[Pk_Numero_Cuenta_Cliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Empresa_Suministradora]    Script Date: 17/05/2024 12:41:07 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Empresa_Suministradora](
	[Pk_NIT_Empresa_Suministradora] [int] NOT NULL,
	[Nombre_Empresa_Suministradora] [nvarchar](50) NULL,
	[Direccion_Empresa_Suministradora] [nvarchar](90) NULL,
	[Telefono_Empresa_Suministradora] [nvarchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[Pk_NIT_Empresa_Suministradora] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[Nombre_Empresa_Suministradora] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Historial_Empresa]    Script Date: 17/05/2024 12:41:07 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Historial_Empresa](
	[Pk_Id_Historial] [int] IDENTITY(1,1) NOT NULL,
	[Fecha_Entrega] [date] NULL,
	[Fk_Id_Producto] [int] NULL,
	[Fk_NIT_Empresa_Suministradora] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Pk_Id_Historial] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Inventario]    Script Date: 17/05/2024 12:41:07 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inventario](
	[Pk_Id_Producto] [int] IDENTITY(1,1) NOT NULL,
	[Nombre_Producto] [nvarchar](50) NULL,
	[Referencia] [nvarchar](50) NULL,
	[Marca] [nvarchar](50) NULL,
	[Numero_de_Orden] [nvarchar](50) NULL,
	[Fecha_de_Compra] [date] NULL,
	[Cantidad] [int] NULL,
	[Fk_Nombre_Empresa_Suministradora] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[Pk_Id_Producto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Producto_Marcado]    Script Date: 17/05/2024 12:41:07 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Producto_Marcado](
	[Pk_Id_Producto_Marcado] [int] IDENTITY(1,1) NOT NULL,
	[Numero_Activo] [nvarchar](max) NULL,
	[Referencia] [nvarchar](50) NULL,
	[Marca] [nvarchar](50) NULL,
	[MAC] [nvarchar](100) NULL,
	[Fk_Id_Producto] [int] NULL,
	[Fecha_Producto_Marcado] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[Pk_Id_Producto_Marcado] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 17/05/2024 12:41:07 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[Pk_Id_Rol] [int] IDENTITY(1,1) NOT NULL,
	[Nombre_Rol] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[Pk_Id_Rol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles_Usuarios]    Script Date: 17/05/2024 12:41:07 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles_Usuarios](
	[Pk_Id_Roles_Usuarios] [int] IDENTITY(1,1) NOT NULL,
	[Fk_CC_Usuario] [int] NULL,
	[Fk_Id_Rol] [int] NULL,
	[Contraseña] [nvarchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[Pk_Id_Roles_Usuarios] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario_Tecnico]    Script Date: 17/05/2024 12:41:07 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario_Tecnico](
	[Pk_CC_Usuario] [int] NOT NULL,
	[Nombre_Usuario] [nvarchar](50) NULL,
	[Apellido_Usuario] [nvarchar](50) NULL,
	[Telefono_Usuario] [nvarchar](30) NULL,
	[Correo_Usuario] [nvarchar](70) NULL,
PRIMARY KEY CLUSTERED 
(
	[Pk_CC_Usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Visita_Tecnica]    Script Date: 17/05/2024 12:41:07 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Visita_Tecnica](
	[Pk_Id_Visita_Tecnica] [int] IDENTITY(1,1) NOT NULL,
	[Fecha_Visita_Tecnica] [date] NULL,
	[Tipo_Visita] [nvarchar](20) NULL,
	[Descripcion_Visita_Tecnica] [nvarchar](max) NULL,
	[Fk_CC_Usuario] [int] NULL,
	[Fk_Id_Producto] [int] NULL,
	[Fk_Numero_Cuenta_Cliente] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Pk_Id_Visita_Tecnica] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Historial_Empresa]  WITH CHECK ADD FOREIGN KEY([Fk_Id_Producto])
REFERENCES [dbo].[Inventario] ([Pk_Id_Producto])
GO
ALTER TABLE [dbo].[Historial_Empresa]  WITH CHECK ADD FOREIGN KEY([Fk_NIT_Empresa_Suministradora])
REFERENCES [dbo].[Empresa_Suministradora] ([Pk_NIT_Empresa_Suministradora])
GO
ALTER TABLE [dbo].[Inventario]  WITH CHECK ADD FOREIGN KEY([Fk_Nombre_Empresa_Suministradora])
REFERENCES [dbo].[Empresa_Suministradora] ([Nombre_Empresa_Suministradora])
GO
ALTER TABLE [dbo].[Producto_Marcado]  WITH CHECK ADD FOREIGN KEY([Fk_Id_Producto])
REFERENCES [dbo].[Inventario] ([Pk_Id_Producto])
GO
ALTER TABLE [dbo].[Roles_Usuarios]  WITH CHECK ADD FOREIGN KEY([Fk_CC_Usuario])
REFERENCES [dbo].[Usuario_Tecnico] ([Pk_CC_Usuario])
GO
ALTER TABLE [dbo].[Roles_Usuarios]  WITH CHECK ADD FOREIGN KEY([Fk_Id_Rol])
REFERENCES [dbo].[Roles] ([Pk_Id_Rol])
GO
ALTER TABLE [dbo].[Visita_Tecnica]  WITH CHECK ADD FOREIGN KEY([Fk_CC_Usuario])
REFERENCES [dbo].[Usuario_Tecnico] ([Pk_CC_Usuario])
GO
ALTER TABLE [dbo].[Visita_Tecnica]  WITH CHECK ADD FOREIGN KEY([Fk_Id_Producto])
REFERENCES [dbo].[Inventario] ([Pk_Id_Producto])
GO
ALTER TABLE [dbo].[Visita_Tecnica]  WITH CHECK ADD FOREIGN KEY([Fk_Numero_Cuenta_Cliente])
REFERENCES [dbo].[Clientes] ([Pk_Numero_Cuenta_Cliente])
GO
USE [master]
GO
ALTER DATABASE [sortDB] SET  READ_WRITE 
GO
