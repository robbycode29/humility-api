## Project Setup

### Prerequisites

- Docker
- Docker Compose

### Running the Application with Docker

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Build and start the Docker containers**:
   ```bash
   docker-compose up -d
   ```

   This command will build the Docker images and start the containers for the application and PostgreSQL database.

3. **Check the status of the containers**:
   ```bash
   docker-compose ps
   ```

   Ensure that both `app` and `db` services are running.

### Running Migrations


1. **Run the migrations**:
   ```bash
   docker-compose exec app npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d ./data-source.ts
   ```

   This command will apply the generated migration to the PostgreSQL database.

### Verifying the Migration

1. **Access the PostgreSQL container shell**:
   ```bash
   docker-compose exec db psql -U postgres -d nest
   ```

2. **List the tables**:
   ```sql
   \dt
   ```

3. **Describe the `superhero` table**:
   ```sql
   \d superhero
   ```

   These commands will help you verify that the `superhero` table has been created with the correct columns and data types.

### Stopping the Application

To stop the running containers, use the following command:
```bash
docker-compose down
```

This will stop and remove the containers, networks, and volumes created by `docker-compose up`.