# README.md

# React Native Expo App

This is a React Native application built with Expo.

## Prerequisites

- Docker
- Docker Compose
- Expo Go app on your mobile device (for testing)

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Start the development server:

   ```bash
   docker compose up --build
   ```

3. Using the Expo Go App:
   - Install Expo Go on your mobile device
   - Make sure your mobile device is on the same network as your development machine
   - Scan the QR code shown in the terminal or visit exp://YOUR_LOCAL_IP:19000

## Development

### First Time Setup

```bash
docker compose up --build
```

### Daily Development

```bash
docker compose up
```

### View Logs

```bash
docker compose logs -f
```

### Stop the Application

```bash
docker compose down
```

## Important Notes

1. Network Configuration:

   - The Expo development server needs to be accessible from your mobile device
   - Make sure your firewall allows connections to ports 19000-19002
   - Your mobile device must be on the same network as your development machine

2. Local IP Address:
   If you're having connection issues, you might need to set your local IP address:

   ```bash
   export REACT_NATIVE_PACKAGER_HOSTNAME=your_local_ip_address
   docker compose up
   ```

3. Hot Reloading:
   - Changes to your code will trigger hot reloading
   - The volume mapping ensures your local changes are reflected in the container

## Troubleshooting

1. "Can't connect to development server"

   - Check if your mobile device is on the same network
   - Try setting REACT_NATIVE_PACKAGER_HOSTNAME to your machine's local IP
   - Ensure ports 19000-19002 are not blocked by firewall

2. "QR code not showing"

   - Check the logs with `docker compose logs -f`
   - Ensure all ports are properly exposed

3. "Changes not reflecting"
   - Ensure the volume mapping is correct
   - Try restarting the container

## Additional Commands

- Install new dependencies:

  ```bash
  docker compose exec expo-app npm install package-name
  ```

- Run other npm scripts:
  ```bash
  docker compose exec expo-app npm run script-name
  ```
