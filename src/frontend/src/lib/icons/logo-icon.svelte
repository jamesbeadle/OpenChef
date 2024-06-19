<script>
    export let className = "";
    export let fill = ""
  </script>
    <svg xmlns="http://www.w3.org/2000/svg"
    class={className}
    fill="none"
    viewBox="0 0 200 200">
     <!-- Background circle for the plate -->
    <circle cx="100" cy="100" r="90" fill="#f2f2f2" stroke="#ccc" stroke-width="5"/>
    
    <!-- Inner circle for the plate's base -->
    <circle cx="100" cy="100" r="70" fill="#ffffff" stroke="#ccc" stroke-width="3"/>
    
    <!-- Plate rim details -->
    <circle cx="100" cy="100" r="80" fill="none" stroke="#999" stroke-width="1"/>
    <circle cx="100" cy="100" r="60" fill="none" stroke="#999" stroke-width="1"/>
    
    </svg>