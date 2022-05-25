#!/bin/sh

# This script checks the markdown files for inconsistencies.

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

echo "Checking general files..."
mdl --config $SCRIPT_DIR/.mdl/mdlrc $(find $SCRIPT_DIR/.. -name "*.md" \
					   -not -path "*/website/*" \
					   -not -path "*/docs/release-notes/*" \
					   -not -path "*/auto_generated/*" \
					   -not -path "*/run_in_docker/*" \
					   -not -name "component_leads.md" \
					   -not -name "releasepolicy.md")
exit_code=$?


echo "Checking release notes..."
mdl --config $SCRIPT_DIR/.mdl/mdlrc_long_lines $(find $SCRIPT_DIR/.. -name "*.md" -and \( -path "*/docs/release-notes/*" -or -name "releasepolicy.md" \)) && [ "$exit_code" -eq "0" ]
exit_code=$?


echo "Checking component leads..."
mdl --config $SCRIPT_DIR/.mdl/mdlrc --rules ~MD013 $SCRIPT_DIR/../docs/component_leads.md && [ "$exit_code" -eq "0" ]
