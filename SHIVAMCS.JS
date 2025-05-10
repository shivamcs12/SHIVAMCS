<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Loader</title>
  <style>
    /* Basic Reset */
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: Arial, sans-serif;
    }

    /* Loader Styles */
    .loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .spinner {
      border: 8px solid #f3f3f3;
      border-top: 8px solid #3498db;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 2s linear infinite;
    }

    /* Spin Animation */
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Main Content */
    .content {
      display: none; /* Hide content until the loader finishes */
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>

  <!-- Loader -->
  <div class="loader" id="loader">
    <div class="spinner"></div>
  </div>

  <!-- Main Content -->
  <div class="content" id="content">
    <h1>Welcome to My Website</h1>
    <p>This is the main content of the page.</p>
  </div>

  <script>
    // Use DOMContentLoaded to ensure the DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
      // Hide the loader and display the content
      document.getElementById('loader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    });
  </script>

</body>
</html>
