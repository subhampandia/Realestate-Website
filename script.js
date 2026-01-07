const properties = [
        {
          id: 1,
          title: "Modern City Apartment",
          price: 8500000, // ₹85 Lakhs
          location: "Patia, Bhubaneswar",
          beds: 2,
          baths: 2,
          sqft: 1350,
          type: "Apartment",
          image:
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
          featured: true,
          description:
            "Modern apartment located near IT hubs with excellent connectivity. Features modular kitchen, balcony, and premium fittings.",
        },
        {
          id: 2,
          title: "Luxury Independent Villa",
          price: 21000000, // ₹2.1 Crore
          location: "Chandrasekharpur, Bhubaneswar",
          beds: 5,
          baths: 4,
          sqft: 4200,
          type: "House",
          image:
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
          featured: true,
          description:
            "Premium independent villa with private garden and parking. Located in a posh residential area with excellent civic amenities.",
        },
        {
          id: 3,
          title: "Premium Penthouse",
          price: 17500000, // ₹1.75 Crore
          location: "Jayadev Vihar, Bhubaneswar",
          beds: 3,
          baths: 3,
          sqft: 2600,
          type: "Penthouse",
          image:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
          featured: true,
          description:
            "High-end penthouse with city skyline views. Spacious terrace, luxury interiors, and proximity to malls and business districts.",
        },
        {
          id: 4,
          title: "Cozy Family Home",
          price: 7200000, // ₹72 Lakhs
          location: "Khandagiri, Bhubaneswar",
          beds: 3,
          baths: 2,
          sqft: 1850,
          type: "House",
          image:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
          featured: false,
          description:
            "Comfortable family home in a peaceful locality. Close to schools, temples, and daily conveniences.",
        },
        {
          id: 5,
          title: "Compact Studio Apartment",
          price: 3800000, // ₹38 Lakhs
          location: "Old Town, Bhubaneswar",
          beds: 1,
          baths: 1,
          sqft: 650,
          type: "Apartment",
          image:
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
          featured: false,
          description:
            "Affordable studio apartment ideal for professionals or rental investment. Well connected to heritage and commercial areas.",
        },
        {
          id: 6,
          title: "Premium Duplex Villa",
          price: 16500000, // ₹1.65 Crore
          location: "Infocity Area, Bhubaneswar",
          beds: 4,
          baths: 3,
          sqft: 3200,
          type: "House",
          image:
            "images/infoo.webp",
          featured: true,
          description:
            "Spacious duplex villa near IT parks. Modern architecture, ample parking, and excellent rental potential.",
        },
      ];

      let filteredProperties = [...properties];

      function formatPrice(price) {
        if (price >= 10000000) {
          return (
            "₹" + (price / 10000000).toFixed(2).replace(/\.00$/, "") + " Cr"
          );
        } else {
          return "₹" + (price / 100000).toFixed(0) + " Lakhs";
        }
      }

      function renderProperties(propertiesToRender) {
        const grid = document.getElementById("propertiesGrid");
        grid.innerHTML = "";

        propertiesToRender.forEach((property) => {
          const card = document.createElement("div");
          card.className = "property-card";
          card.onclick = () => openModal(property);

          card.innerHTML = `
                    <div style="position: relative;">
                        <img src="${property.image}" alt="${
            property.title
          }" class="property-image">
                        ${
                          property.featured
                            ? '<div class="property-badge">Featured</div>'
                            : ""
                        }
                    </div>
                    <div class="property-details">
                        <div class="property-price">${formatPrice(
                          property.price
                        )}</div>
                        <h3 class="property-title">${property.title}</h3>
                        <div class="property-location">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            ${property.location}
                        </div>
                        <div class="property-features">
                            <div class="feature">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443z"/>
                                </svg>
                                ${property.beds} Beds
                            </div>
                            <div class="feature">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1z"/>
                                </svg>
                                ${property.baths} Baths
                            </div>
                            <div class="feature">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm16 14H5V5h14v14z"/>
                                </svg>
                                ${property.sqft} sqft
                            </div>
                        </div>
                    </div>
                `;

          grid.appendChild(card);
        });
      }

      function filterProperties() {
        const searchTerm = document
          .getElementById("searchInput")
          .value.toLowerCase();
        const priceRange = document.getElementById("priceFilter").value;
        const bedrooms = document.getElementById("bedroomFilter").value;

        filteredProperties = properties.filter((property) => {
          const matchesSearch =
            property.title.toLowerCase().includes(searchTerm) ||
            property.location.toLowerCase().includes(searchTerm) ||
            property.type.toLowerCase().includes(searchTerm);

          let matchesPrice = true;
          if (priceRange !== "all") {
            if (priceRange === "20000000+") {
              matchesPrice = property.price >= 20000000;
            } else {
              const [min, max] = priceRange.split("-").map(Number);
              matchesPrice = property.price >= min && property.price <= max;
            }
          }

          const matchesBedrooms =
            bedrooms === "all" || property.beds >= parseInt(bedrooms);

          return matchesSearch && matchesPrice && matchesBedrooms;
        });

        renderProperties(filteredProperties);

        // ✅ AUTO SCROLL TO PROPERTIES SECTION
        document.getElementById("properties").scrollIntoView({
          behavior: "smooth",
        });
      }

      function openModal(property) {
        const modal = document.getElementById("propertyModal");
        document.getElementById("modalImage").src = property.image;
        document.getElementById("modalTitle").textContent = property.title;
        document.getElementById("modalPrice").textContent = formatPrice(
          property.price
        );
        document.getElementById("modalLocation").innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                ${property.location}
            `;
        document.getElementById("modalFeatures").innerHTML = `
                <div class="feature">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443z"/>
                    </svg>
                    ${property.beds} Beds
                </div>
                <div class="feature">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1z"/>
                    </svg>
                    ${property.baths} Baths
                </div>
                <div class="feature">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm16 14H5V5h14v14z"/>
                    </svg>
                    ${property.sqft} sqft
                </div>
                <div class="feature" style="color: #2a5298; font-weight: bold;">${property.type}</div>
            `;
        document.getElementById("modalDescription").textContent =
          property.description;
        modal.style.display = "block";
      }

      function closeModal() {
        document.getElementById("propertyModal").style.display = "none";
      }

      window.onclick = function (event) {
        const modal = document.getElementById("propertyModal");
        if (event.target === modal) {
          closeModal();
        }
      };

      renderProperties(properties);
      