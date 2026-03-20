# Step-by-Step Implementation Guide: Chronological Gallery Reordering

**Project:** Rojastopher Photography Website  
**Task:** Reorder galleries chronologically (newest to oldest)  
**Estimated Time:** 30-45 minutes

## Pre-Implementation Setup

### 1. Create Backup
```bash
# Create a backup of the original index.html file
cp index.html index.html.backup
```

### 2. Open Files for Editing
- Open `index.html` in your preferred code editor
- Ensure you can see line numbers for precise editing

## Phase 1: HTML Structure Reordering (15 minutes)

### Step 1.1: Move 2025 Gallery to Top Position

**Find:** Locate the 2025 gallery section (around line 1000-1100)
```html
<!-- 09 — 2025 -->
<div class="gallery-outer" id="2025">
  <div class="gallery-sticky">
    <div class="gallery-track" data-gallery="2025" data-title="2025">
      <!-- Image elements -->
    </div>
    <div class="gallery-info">
      <!-- Gallery metadata -->
    </div>
  </div>
</div>
```

**Action:** Cut this entire section (from `<!-- 09 — 2025 -->` to the closing `</div>`)

**Paste:** Insert immediately after the hero section (after line ~100, before the first gallery)

**Update:** Change section number from `09` to `01`
```html
<!-- 01 — 2025 -->
```

### Step 1.2: Move Handmaids Gallery to Second Position

**Find:** Locate the Handmaids gallery section (around line 1100-1200)
```html
<!-- 10 — HANDMAIDS -->
<div class="gallery-outer" id="handmaids">
  <div class="gallery-sticky">
    <div class="gallery-track" data-gallery="handmaids" data-title="Handmaids">
      <!-- Image elements -->
    </div>
    <div class="gallery-info">
      <!-- Gallery metadata -->
    </div>
  </div>
</div>
```

**Action:** Cut this entire section

**Paste:** Insert immediately after the 2025 gallery

**Update:** Change section number from `10` to `02`
```html
<!-- 02 — HANDMAIDS -->
```

### Step 1.3: Move George Floyd Protests Gallery to Third Position

**Find:** Locate the George Floyd gallery section (around line 900-1000)
```html
<!-- 08 — GEORGE FLOYD PROTESTS -->
<div class="gallery-outer" id="george-floyd-protests">
  <div class="gallery-sticky">
    <div class="gallery-track" data-gallery="george-floyd-protests" data-title="George Floyd Protests">
      <!-- Image elements -->
    </div>
    <div class="gallery-info">
      <!-- Gallery metadata -->
    </div>
  </div>
</div>
```

**Action:** Cut this entire section

**Paste:** Insert immediately after the Handmaids gallery

**Update:** Change section number from `08` to `03`
```html
<!-- 03 — GEORGE FLOYD PROTESTS -->
```

### Step 1.4: Reorder Remaining Galleries

**Current remaining order:** Women's March → Inauguration Day → Muslim Ban SeaTac → Muslim Ban Westlake → Occupy Wall Street → Iraq → DNC 2008

**Target order:** Women's March → Inauguration Day → Muslim Ban SeaTac → Muslim Ban Westlake → Occupy Wall Street → DNC 2008 → Iraq

**Action:** Move the Iraq gallery (currently at position 6) to the end (position 10)

**Find:** Iraq gallery section
```html
<!-- 06 — IRAQ -->
<div class="gallery-outer" id="iraq">
  <!-- ... content ... -->
</div>
```

**Action:** Cut and paste to the very end, just before the footer

**Update:** Change section number from `06` to `10`
```html
<!-- 10 — IRAQ -->
```

**Find:** DNC 2008 gallery section (currently at position 7)
```html
<!-- 07 — DNC 2008 -->
<div class="gallery-outer" id="dnc-2008">
  <!-- ... content ... -->
</div>
```

**Action:** Move to position 9 (before Iraq)

**Update:** Change section number from `07` to `09`
```html
<!-- 09 — DNC 2008 -->
```

### Step 1.5: Update All Remaining Section Numbers

Update the section numbers for the galleries that stayed in their relative positions:

- Women's March: `01` → `04`
- Inauguration Day: `02` → `05`  
- Muslim Ban SeaTac: `03` → `06`
- Muslim Ban Westlake: `04` → `07`
- Occupy Wall Street: `05` → `08`

## Phase 2: Sidebar Navigation Update (10 minutes)

### Step 2.1: Update Navigation Order

**Find:** The sidebar navigation section (around line 50-150)
```html
<nav class="sidebar-nav" id="sidebarNav">
  <ul>
    <li><a href="#womens-march-on-dc" data-section="womens-march-on-dc"><span class="nav-num">01</span>Women's March D.C.</a></li>
    <li><a href="#inaugertion-day" data-section="inaugertion-day"><span class="nav-num">02</span>Inauguration Day</a></li>
    <li><a href="#muslim-ban-protest" data-section="muslim-ban-protest"><span class="nav-num">03</span>Muslim Ban — SeaTac</a></li>
    <li><a href="#muslim-ban-protest-westlake-center" data-section="muslim-ban-protest-westlake-center"><span class="nav-num">04</span>Muslim Ban — Westlake</a></li>
    <li><a href="#occupy-wall-street" data-section="occupy-wall-street"><span class="nav-num">05</span>Occupy Wall Street</a></li>
    <li><a href="#iraq" data-section="iraq"><span class="nav-num">06</span>Iraq</a></li>
    <li><a href="#dnc-2008" data-section="dnc-2008"><span class="nav-num">07</span>DNC 2008</a></li>
    <li><a href="#george-floyd-protests" data-section="george-floyd-protests"><span class="nav-num">08</span>George Floyd</a></li>
    <li><a href="#2025" data-section="2025"><span class="nav-num">09</span>2025</a></li>
    <li><a href="#handmaids" data-section="handmaids"><span class="nav-num">10</span>Handmaids</a></li>
  </ul>
</nav>
```

**Action:** Reorder the `<li>` elements to match the new gallery sequence:

```html
<nav class="sidebar-nav" id="sidebarNav">
  <ul>
    <li><a href="#2025" data-section="2025"><span class="nav-num">01</span>2025</a></li>
    <li><a href="#handmaids" data-section="handmaids"><span class="nav-num">02</span>Handmaids</a></li>
    <li><a href="#george-floyd-protests" data-section="george-floyd-protests"><span class="nav-num">03</span>George Floyd</a></li>
    <li><a href="#womens-march-on-dc" data-section="womens-march-on-dc"><span class="nav-num">04</span>Women's March D.C.</a></li>
    <li><a href="#inaugertion-day" data-section="inaugertion-day"><span class="nav-num">05</span>Inauguration Day</a></li>
    <li><a href="#muslim-ban-protest" data-section="muslim-ban-protest"><span class="nav-num">06</span>Muslim Ban — SeaTac</a></li>
    <li><a href="#muslim-ban-protest-westlake-center" data-section="muslim-ban-protest-westlake-center"><span class="nav-num">07</span>Muslim Ban — Westlake</a></li>
    <li><a href="#occupy-wall-street" data-section="occupy-wall-street"><span class="nav-num">08</span>Occupy Wall Street</a></li>
    <li><a href="#dnc-2008" data-section="dnc-2008"><span class="nav-num">09</span>DNC 2008</a></li>
    <li><a href="#iraq" data-section="iraq"><span class="nav-num">10</span>Iraq</a></li>
  </ul>
</nav>
```

### Step 2.2: Verify Data Attributes

**Check:** Ensure all `data-section` attributes match the corresponding gallery IDs
- `data-section="2025"` → `id="2025"`
- `data-section="handmaids"` → `id="handmaids"`
- `data-section="george-floyd-protests"` → `id="george-floyd-protests"`
- And so on...

## Phase 3: Testing and Validation (15-20 minutes)

### Step 3.1: Basic Functionality Test

1. **Save the file** and open `index.html` in a web browser
2. **Test sidebar navigation:**
   - Click each navigation item
   - Verify it scrolls to the correct gallery
   - Confirm the active state highlights correctly

3. **Test gallery functionality:**
   - Scroll through each gallery
   - Verify horizontal pan works
   - Test lightbox by clicking images
   - Check progress bars update correctly

### Step 3.2: Mobile Testing

1. **Open browser developer tools**
2. **Toggle device toolbar** (mobile view)
3. **Test responsive navigation:**
   - Verify horizontal scrolling works
   - Test gallery functionality on mobile
   - Check touch interactions

### Step 3.3: Cross-Browser Testing

Test in multiple browsers:
- Chrome
- Firefox  
- Safari (if available)
- Edge (if available)

Verify:
- All galleries load correctly
- Navigation works consistently
- No layout issues or broken functionality

### Step 3.4: Accessibility Testing

1. **Keyboard navigation:**
   - Tab through navigation items
   - Verify focus indicators are visible
   - Test Enter/Space to activate links

2. **Screen reader compatibility:**
   - Test with NVDA/VoiceOver if available
   - Verify navigation labels are clear
   - Confirm image descriptions work

## Post-Implementation Verification

### Final Checklist

- [ ] All galleries accessible via sidebar navigation
- [ ] Galleries display in correct chronological order (2025 → Handmaids → George Floyd → ...)
- [ ] Section numbers are sequential and correct
- [ ] Gallery functionality (scroll, lightbox, progress) works for all galleries
- [ ] Mobile responsiveness maintained
- [ ] Cross-browser compatibility verified
- [ ] No console errors or JavaScript issues
- [ ] Navigation active states work correctly
- [ ] Hero slideshow remains functional
- [ ] Footer displays correctly

### Troubleshooting Common Issues

**Issue:** Navigation links don't scroll to correct galleries
**Solution:** Verify `data-section` attributes match gallery `id` attributes exactly

**Issue:** Gallery functionality broken
**Solution:** Check that gallery sections are properly structured with correct CSS classes

**Issue:** Mobile layout broken
**Solution:** Verify no CSS changes were made that could affect responsive behavior

**Issue:** Images not loading
**Solution:** Confirm image paths in `src` attributes are still correct

## Completion

Once all testing is complete and the checklist is verified:

1. **Commit changes** to version control (if applicable)
2. **Update backup** if needed
3. **Document any issues** encountered for future reference

The website should now display galleries in chronological order, providing visitors with a clear narrative flow from the most recent work (2025) back to the earliest documented events (Iraq 2008).